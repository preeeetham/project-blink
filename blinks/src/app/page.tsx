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
  // pages/index.tsx

  import { Blink } from "@dialectlabs/blinks";
  import '@dialectlabs/blinks/index.css'; // Import Blink's default styles

  const HomePage = () => {
    return (
      <div>
        <h1>Welcome to My Blink App</h1>
        <Blink stylePreset="default" />
      </div>
    );
  };

  export default HomePage;

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
  // Example use case 1: Basic usage of Blink
  import { Blink } from 'blink-library';

  function App() {
    return (
      <div>
        <Blink>Hello, World!</Blink>
      </div>
    );
  }
  `;

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
  // Example use case 2: Advanced Blink configuration
  import { Blink, configureBlink } from 'blink-library';

  configureBlink({ color: 'blue', size: 'large' });

  function App() {
    return (
      <div>
        <Blink>Advanced Configuration</Blink>
      </div>
    );
  }
  `;

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
  // Example use case 5: Responsive Blink Styling
  import { Blink } from 'blink-library';
  import './App.css'; // Assume this file includes responsive styling

  function App() {
    return (
      <div>
        <Blink className="responsive-blink">Responsive Blink</Blink>
      </div>
    );
  }
  `;

  const actionsIntegrationCode = `
  // Example: Integrating Actions API with Blinks
  import { Blink } from 'blink-library';
  import { performAction } from 'actions-library'; // Hypothetical actions library

  function App() {
    const handleClick = async () => {
      const result = await performAction('actionName', { key: 'value' });
      console.log(result);
    };

    return (
      <div>
        <Blink onClick={handleClick}>Perform Action</Blink>
      </div>
    );
  }
  `;

  const extraordinaryUseCase1 = `
  // Example: Blinks in Real-Time Data Visualization
  import { Blink } from 'blink-library';
  import { useEffect, useState } from 'react';

  function RealTimeData() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const interval = setInterval(() => {
        fetch('/api/data')
          .then(response => response.json())
          .then(data => setData(data));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <Blink>{data ? JSON.stringify(data) : 'Loading data...'}</Blink>
      </div>
    );
  }
  `;

  const extraordinaryUseCase2 = `
  // Example: Blinks for Dynamic Content Management
  import { Blink } from 'blink-library';
  import { useState } from 'react';

  function DynamicContent() {
    const [content, setContent] = useState('Initial Content');

    const updateContent = () => {
      setContent('Updated Content');
    };

    return (
      <div>
        <Blink>{content}</Blink>
        <button onClick={updateContent}>Update Content</button>
      </div>
    );
  }
  `;

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
              Get Started To Know About Blink and Actions!!
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
            <h2 className="text-2xl font-bold mb-6">Integrating Blinks with Actions</h2>
            <p className="text-lg mb-6">
              Blinks can be integrated with Actions to create dynamic and interactive applications. For example, a Blink component can trigger an Action when clicked, enabling real-time updates or interactions.
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
              Blink supports advanced configuration options that allow you to customize various properties. Here’s an example of how to configure Blink to fit specific needs.
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
              Blinks can be styled to be responsive across different screen sizes. This example shows how to apply responsive styles to Blink components.
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
