import { NextResponse } from 'next/server';
import dns from 'dns';
import net from 'net';

const publicDomains = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'ymail.com',
  'hotmail.com', 'outlook.com', 'live.com', 'msn.com', 'icloud.com', 
  'me.com', 'mac.com', 'protonmail.com', 'proton.me', 'rediffmail.com', 
  'rediff.com', 'aol.com', 'zoho.com'
];

async function verifyMailboxExists(email: string, mxServer: string): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = net.createConnection(25, mxServer);
    socket.setTimeout(4000); 

    let step = 0;
    let mailboxValid = false;

    socket.on('data', (data) => {
      const response = data.toString();
      const code = parseInt(response.substring(0, 3), 10);

      if (step === 0 && code === 220) {
        socket.write(`HELO uritechnologies.com\r\n`);
        step++;
      } else if (step === 1 && code === 250) {
        socket.write(`MAIL FROM:<system@uritechnologies.com>\r\n`);
        step++;
      } else if (step === 2 && code === 250) {
        socket.write(`RCPT TO:<${email}>\r\n`);
        step++;
      } else if (step === 3) {
        if (code === 250 || code === 251) {
          mailboxValid = true; 
        } else if (code >= 500 && code <= 599) {
          mailboxValid = false; 
        } else {
          mailboxValid = true; 
        }
        socket.write('QUIT\r\n');
        socket.end();
      }
    });

    socket.on('error', () => {
      resolve(true); 
    });

    socket.on('timeout', () => {
      socket.destroy();
      resolve(true); 
    });

    socket.on('end', () => {
      resolve(mailboxValid);
    });
  });
}

export async function POST(request: Request) {
  try {
    const { email, type } = await request.json();

    if (!email || !email.trim()) {
      return NextResponse.json({ valid: false, error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ valid: false, error: 'Please enter a valid email address' }, { status: 400 });
    }

    const domain = email.split('@')[1]?.toLowerCase();

    if (type === 'Company' && publicDomains.includes(domain)) {
      return NextResponse.json(
        { valid: false, error: 'Please use your work email address. Public email providers are not accepted.' },
        { status: 400 }
      );
    }

    let mxRecords;
    try {
      mxRecords = await dns.promises.resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        return NextResponse.json(
          { valid: false, error: 'The email domain provided cannot receive mail.' },
          { status: 400 }
        );
      }
    } catch (dnsError) {
      return NextResponse.json(
        { valid: false, error: 'The domain provider is invalid or unreachable.' },
        { status: 400 }
      );
    }

    mxRecords.sort((a, b) => a.priority - b.priority);
    const primaryMxServer = mxRecords[0].exchange;

    const isMailboxValid = await verifyMailboxExists(email, primaryMxServer);
    
    if (!isMailboxValid) {
      return NextResponse.json(
        { valid: false, error: 'This specific email address does not exist on the destination server.' },
        { status: 400 }
      );
    }

    return NextResponse.json({ valid: true });
  } catch (error) {
    return NextResponse.json({ valid: true });
  }
}
