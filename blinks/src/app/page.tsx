import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaEthereum } from "react-icons/fa";
import Head from 'next/head';
import Image from "next/legacy/image";


export default function Home() {
  // Example code snippets
  const exampleCode0= `
  // Start: Create a nextjs project
   npx create-next-app project-blink
   cd project-blink
   npm install @solana/actions
  `;

  const exampleCode00= `
 import { ActionGetResponse } from '@solana/actions';

// Define the ActionGetResponse interface
export interface ActionGetResponse {
  // URL to the icon image
  icon: string;

  // Label for the Blink, typically a short text that describes the purpose or name of the Blink
  label: string;

  // Description of the Blink, providing more detailed information about what the Blink does
  description: string;

  // Title of the Blink, used as the main heading or title when displaying the Blink
  title: string;

  // Links related to the Blink, usually containing actions that users can perform
  links: {
    // An array of action objects, each representing a possible action the user can take
    actions: Array<{
      // URL for the action, indicating where the user will be directed or what API endpoint will be called
      href: string;

      // Label for the action button, describing what the action does
      label: string;

      // (Optional) Array of parameters for dynamic actions, allowing users to input specific data
      parameters?: Array<{
        // Name of the parameter, used as the key for the input value
        name: string;

        // Placeholder or label for the input field, guiding users on what to enter
        label: string;
      }>;
    }>;
  };
}
 `;

  const exampleCode000= `
  // actionAdapter.ts

import { ActionAdapter } from "@dialectlabs/blinks";

class MyActionAdapter implements ActionAdapter {
  async signTransaction(tx: string) {
    // Implement your signTransaction logic here
  }
  
  async connect() {
    // Implement your connect logic here
  }

  async confirmTransaction(sig: string) {
    // Implement your confirmTransaction logic here
  }
}

export default MyActionAdapter;

  `;

  const exampleCode1 = `
  // pages/api/blink.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ActionGetResponse, ACTIONS_CORS_HEADERS } from '@solana/actions';

// GET request handler for Blink metadata
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Define the response payload according to the ActionGetResponse interface
  const payload: ActionGetResponse = {
    icon: , // URL to the icon image
    label: "Support my project", // Label for the Blink
    description: "Support my project with SOL using this blink!", // Description of the Blink
    title: "Support Project - SOL Donation", // Title of the Blink
    links: {
      actions: [
        {
          href: "/api/actions/donate?amount=0.1", // URL for the action
          label: "0.1 SOL", // Label for the action button
        },
        {
          href: "/api/actions/donate?amount=0.5", // URL for the action
          label: "0.5 SOL", // Label for the action button
        },
        {
          href: "/api/actions/donate?amount=1.0", // URL for the action
          label: "1.0 SOL", // Label for the action button
        },
        {
          href: "/api/actions/donate?amount={amount}", // URL with a dynamic parameter
          label: "Custom Amount", // Label for the action button
          parameters: [
            {
              name: "amount", // Name of the parameter
              label: "Enter SOL amount", // Placeholder or label for the input field
            },
          ],
        },
      ],
    },
  };

  // Return the JSON response with appropriate CORS headers
  res.status(200).json(payload);
};

export default handler;`

  const exampleCode01 = `
  // pages/index.tsx

import { useEffect, useState } from 'react';
import { Blink } from "@dialectlabs/blinks";
import '@dialectlabs/blinks/index.css';

const HomePage = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result.message);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to My Blink App</h1>
      <Blink stylePreset="default" />
      <p>API Response: {data}</p>
    </div>
  );
};

export default HomePage;
`
  const exampleCode2 = `
  import { ActionGetResponse } from '@solana/actions';

// Define the advanced ActionGetResponse interface
export interface AdvancedActionGetResponse extends ActionGetResponse {
  // Additional metadata about the Blink
  metadata?: {
    creator: string; // Creator of the Blink
    createdAt: string; // Timestamp of when the Blink was created
  };

  // Support for multiple languages
  translations?: {
    [languageCode: string]: {
      label: string; // Translated label
      description: string; // Translated description
      title: string; // Translated title
    };
  };

  // Grouping related actions together
  actionGroups?: Array<{
    groupName: string; // Name of the action group
    actions: Array<{
      href: string;
      label: string;
      parameters?: Array<{
        name: string;
        label: string;
      }>;
      condition?: {
        // Condition that determines whether the action should be shown
        key: string; // Key to check in the context
        value: any; // Value that the key should have
      };
    }>;
  }>;
}

// Example usage in an API route
export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Define the response payload according to the AdvancedActionGetResponse interface
  const payload: AdvancedActionGetResponse = {
    icon: //image url,
    label: "Support my project",
    description: "Support my project with SOL using this blink!",
    title: "Support Project - SOL Donation",
    metadata: {
      creator: "Your Name",
      createdAt: new Date().toISOString(),
    },
    translations: {
      es: {
        label: "Apoya mi proyecto",
        description: "¡Apoya mi proyecto con SOL usando este blink!",
        title: "Apoyar Proyecto - Donación de SOL",
      },
    },
    actionGroups: [
      {
        groupName: "Donate",
        actions: [
          {
            href: "/api/actions/donate?amount=0.1",
            label: "0.1 SOL",
          },
          {
            href: "/api/actions/donate?amount=0.5",
            label: "0.5 SOL",
          },
          {
            href: "/api/actions/donate?amount=1.0",
            label: "1.0 SOL",
          },
          {
            href: "/api/actions/donate?amount={amount}",
            label: "Custom Amount",
            parameters: [
              {
                name: "amount",
                label: "Enter SOL amount",
              },
            ],
            condition: {
              key: "userRole",
              value: "supporter", // Only show this action if the user role is 'supporter'
            },
          },
        ],
      },
    ],
  };

  // Return the JSON response with appropriate CORS headers
  res.status(200).json(payload);
};

export default handler;

  `

  const exampleCode3 = `
  // Example use case 3: Blink with Animation
  import { Blink } from 'blink-library';
  import { useEffect, useState } from 'react';

  function App() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setAnimate(true), 1000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div>
        <Blink className={animate ? 'animate-pulse' : ''}>Blinked with Animation!</Blink>
      </div>
    );
  }
  `;

  const exampleCode4 = `
  // Example use case 4: Conditional Blink Rendering
  import { Blink } from 'blink-library';

  function App() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => setIsVisible(prev => !prev);

    return (
      <div>
        <button onClick={toggleVisibility}>Toggle Blink</button>
        {isVisible && <Blink>Conditional Blink Visibility</Blink>}
      </div>
    );
  }
  `;

  const exampleCode5 = `
  // components/BlinkComponent.tsx
import { useEffect, useState } from 'react';

interface ActionLink {
  href: string;
  label: string;
  parameters?: Array<{
    name: string;
    label: string;
  }>;
}

interface ActionGetResponse {
  icon: string;
  label: string;
  description: string;
  title: string;
  links: {
    actions: ActionLink[];
  };
}

const BlinkComponent = () => {
  const [blinkData, setBlinkData] = useState<ActionGetResponse | null>(null);

  // Fetch Blink metadata from the API
  useEffect(() => {
    fetch('/api/blink')
      .then(response => response.json())
      .then(data => setBlinkData(data))
      .catch(error => console.error('Error fetching Blink metadata:', error));
  }, []);

  if (!blinkData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={blinkData.icon} alt={blinkData.label} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{blinkData.title}</div>
          <p className="mt-2 text-gray-500">{blinkData.description}</p>
          <div className="mt-4">
            {blinkData.links.actions.map((action, index) => (
              <a key={index} href={action.href} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlinkComponent;
`

  const actionsIntegrationCode = `
  import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  ActionPostRequest,
  createPostResponse,
  ActionPostResponse,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    icon: new URL("/img/nick.jpg", new URL(req.url).origin).toString(),
    label: "Buy me a coffee",
    description:
      "Buy me a coffee with SOL using this super sweet blink of mine :)",
    title: "Nick Frostbutter - Buy Me a Coffee",
    links: {
      actions: [
        {
          href: "/api/actions/donate?amount=0.1",
          label: "0.1 SOL",
        },
        {
          href: "/api/actions/donate?amount=0.5",
          label: "0.5 SOL",
        },
        {
          href: "/api/actions/donate?amount=1.0",
          label: "1.0 SOL",
        },
        {
          href: "/api/actions/donate?amount={amount}",
          label: "Send SOL", // button text
          parameters: [
            {
              name: "amount", // name template literal
              label: "Enter a SOL amount", // placeholder for the input
            },
          ],
        },
      ],
    },
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);

    const body: ActionPostRequest = await req.json();

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      throw "Invalid 'account' provided. Its not a real pubkey";
    }

    let amount: number = 0.1;

    if (url.searchParams.has("amount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "0.1") || amount;
      } catch (err) {
        throw "Invalid 'amount' input";
      }
    }

    const connection = new Connection(clusterApiUrl("devnet"));

    const TO_PUBKEY = new PublicKey(
      "9FK3BZiGatVrDwVZoMZsJQW24ETAmmzBAGPnJp9jSdtu",
    );

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        lamports: amount * LAMPORTS_PER_SOL,
        toPubkey: TO_PUBKEY,
      }),
    );
    transaction.feePayer = account;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Thanks for the coffee fren :)",
      },
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;

    return Response.json(
      {
        message,
      },
      {
        headers: ACTIONS_CORS_HEADERS,
      },
    );
  }
};`

  
  

  const guiImageUrl = 'https://www.dialect.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblinks-are-the-actions-interface.ee1e84df.png&w=3840&q=75';
  const apiImageUrl = 'https://www.dialect.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Factions-are-api-code.62b32555.png&w=1200&q=75';
  const twitterImageUrl = 'https://www.dialect.to/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-in-twitter.d4efcd3b.png&w=1920&q=75';

  return (
    <>
      <Head>
        <title>Blinks and Actions - Comprehensive Guide</title>
        <meta name="description" content="A comprehensive guide to Blinks and Actions, including usage examples, extraordinary use cases, and integration strategies." />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black text-white">
        <div className="w-full max-w-5xl">
          <header className="flex items-center justify-between p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg mb-8">
            <h1 className="text-4xl font-bold">
              All You Need To Know About Blink and Actions!!
            </h1>
            <FaEthereum className="text-white text-4xl" />
          </header>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">What are Actions!?</h2>
            <p className="text-lg mb-6">
              Actions are API endpoints or methods that perform specific tasks or operations in response to requests. They serve as the backend operations that interact with frontend components like Blinks.
            </p>
            <p className="text-lg mb-6">
              Actions can be used to handle various operations such as data fetching, form submissions, or performing complex business logic. They provide the functionality that Blinks can utilize for dynamic interactions.
            </p>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">#How Actions API Looks</h2>
            <div className="mt-8">
            <Image
      src={apiImageUrl}
      alt="Action API code"
      width={1200}
      height={800}
      layout="responsive"
    />            </div>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">What are Blinks?</h2>
            <p className="text-lg mb-6">
            In simple terms, Blinks are like customizable, interactive buttons or visual elements on a website that can do things when you click or hover over them. Imagine them as smart, dynamic buttons that can change color, size, or animation based on what you want them to do.
            </p>
            <p className="text-lg mb-6">
            Blinks are associated with Actions and crypto in the sense that they can be used to trigger specific operations or transactions in the world of cryptocurrency. For example, you might click a Blink to make a donation in crypto or to mint a new NFT. Actions, in this context, refer to the operations that Blinks can trigger, such as sending crypto, interacting with blockchain-based applications, or executing various commands. So, Blinks are essentially the interactive elements that make it easy for users to perform actions related to cryptocurrency and blockchain technologies.
            </p>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">#How Blinks GUI Actually Looks</h2>
            <div className="mt-8">
            <Image
      src={guiImageUrl}
      alt="Blinks GUI"
      width={1200}
      height={650}
      layout="responsive"
    />            </div>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Get Started#</h2>
            <p className="text-lg mb-6">
            To quickly get started with creating custom Solana Actions:
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode0}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Creating a Basic Blink Component</h2>
            <p className="text-lg mb-6">
            In your pages directory, create a file named index.tsx (or index.js if you are not using TypeScript). Add the following code:
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode00}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Integrating Blink with Actions</h2>
            <p className="text-lg mb-6">
            First, create a new file actionAdapter.ts in your project directory. Add the following code to handle Blink actions:
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode000}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Fetching Data from the API</h2>
            <p className="text-lg mb-6">
            Update your index.tsx file to fetch data from your API:
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode01}
            </SyntaxHighlighter>
          </section>


          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
            <p className="text-lg mb-6">
              To get started with Blink, you need to install the library and import it into your components. Below is a simple example of how to use Blink in a React component.
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode1}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Donations on Blinks!!</h2>
            <p className="text-lg mb-6">
              One of the main use cases that blinks are used rightnow are in donations. And here is a example!
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {actionsIntegrationCode}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">#Testing Your Blink!!</h2>
            <p className="text-lg mb-6">
            When deploying your custom Solana Actions to production, it is essential to ensure your application has a valid actions.json file at the root of your domain. This file defines the available actions and their configurations. Additionally, make sure your application responds with the required Cross-Origin headers on all Action endpoints, including the actions.json file. These headers are necessary for enabling cross-origin requests, which are crucial for the proper functioning of your application.
            </p>
            <p className="text-lg mb-6">
            To test and debug your Blinks and Actions, use the <a href="https://www.blinks.xyz/inspector" className="text-blue-400 hover:underline">Blink Inspector</a>. This tool helps you verify that your Blinks and Actions are set up correctly and functioning as expected. If you are looking for inspiration around building Actions and Blinks, check out the Awesome Blinks repository for some community creations and ideas for new ones. This repository showcases various examples and innovative uses of Blinks and Actions, providing a valuable resource for developers.
            </p>
          </section>

          

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Advanced Configuration</h2>
            <p className="text-lg mb-6">
            An advanced configuration for the ActionGetResponse interface can include additional features like conditional actions, action grouping, metadata, and multi-language support
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode2}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Blink with Animation</h2>
            <p className="text-lg mb-6">
              Adding animations to Blinks can enhance the user experience by providing visual feedback. This example demonstrates how to use Blink with animation.
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode3}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Conditional Blink Rendering</h2>
            <p className="text-lg mb-6">
              You can control the visibility of Blinks based on conditions. Here’s an example of toggling Blink visibility with user interaction.
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode4}
            </SyntaxHighlighter>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Responsive Blink Styling</h2>
            <p className="text-lg mb-6">
            To create a responsive Blink component with proper styling, we can use Tailwind CSS along with React. This snippet will include a responsive layout for the Blink component, ensuring it looks good on various screen sizes.
            </p>
            <SyntaxHighlighter language="javascript" style={gruvboxDark}>
              {exampleCode5}
            </SyntaxHighlighter>
          </section>

          <section className="flex flex-wrap justify-between mb-8">
            <div className="flex-1 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mr-4">
              <h2 className="text-2xl font-bold mb-6">#Blinks on Twitter</h2>
              <p className="text-lg mb-6">
                Blinks on Solana are revolutionizing how blockchain functionality is integrated into web experiences. Here are some exciting ways Blinks are being used, including on Twitter:
              </p>
              <ul className="list-disc list-inside text-lg mb-6 space-y-4">
                <li>
                  <strong>Donations and Tips:</strong> Content creators can share a DONATE TO ME Blink on Twitter. When users click the link, a donation widget appears directly in the tweet, allowing fans to tip the creator in SOL instantly.
                </li>
                <li>
                  <strong>NFT Minting and Governance:</strong> Blinks enable minting custom NFTs or participating in governance votes directly from URLs. For instance, a community could vote on policies via links shared in newsletters or social media posts.
                </li>
                <li>
                  <strong>Seamless Transactions:</strong> Users can initiate transactions by clicking Blinks, adding tokens to their Solana wallets without complex setups. These Blinks can be shared across platforms, including Twitter.
                </li>
                <li>
                  <strong>Simplified Interactions:</strong> Blinks allow users to perform blockchain-related actions, such as making cryptocurrency donations or minting NFTs, directly from tweets. This integration makes it easier for users to engage with blockchain technologies without leaving the Twitter platform.
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg ml-4">
              <h2 className="text-2xl font-bold mb-6">#Crypto In Crypto Twitter!!</h2>
              <div className="mt-8">
              <Image
      src={twitterImageUrl}
      alt="Blink Interface"
      width={720}
      height={1200}
      layout="responsive"
    />
              </div>
            </div>
          </section>

          <section className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6">#Explore Resources: </h2>
            <p className="text-lg mb-6">
              For additional examples and resources on Blink and Actions, explore the following:
            </p>
            <ul className="list-disc list-inside text-lg mb-6 space-y-4">
              <li>
                <a href="https://github.com/dialectlabs/blinks" className="text-blue-400 hover:underline">GitHub Repository</a> - Check out the codebase for Blink and Actions.
              </li>
              <li>
                <a href="hhttps://www.dialect.to/" className="text-blue-400 hover:underline">Understanding Blinks and Actions</a> - Comprehensive guide on Blink’s features and usage.
              </li>
              <li>
                <a href="https://solana.com/docs/advanced/actions" className="text-blue-400 hover:underline">Actions and Blinks Documentation</a> - Detailed documentation on implementing and using Actions and Blinks.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
