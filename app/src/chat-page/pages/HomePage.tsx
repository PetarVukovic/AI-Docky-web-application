import React from 'react';
import { FaFileAlt, FaUpload, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FeatureBox from '../components/Home/FeatureBox';

const HomePage: React.FC = () => {
    return (
        <div className="main-content text-center bg-gray-50 p-8">
            <section className="welcome-section mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-6 animate-fadeInDown">
                    Welcome to AI Chat with Your Documents 🤖
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fadeInUp">
                    Transform the way you interact with your documents using advanced AI technology. Our application allows you to efficiently manage and analyze your documents. Here's what you get:
                </p>
            </section>

            {/* New Section: How It Works */}
            <section className="how-it-works-section mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-4 animate-fadeInLeft">
                    How It Works
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fadeInRight">
                    Follow these simple steps to get started with our application:
                </p>
                <div className="flex flex-wrap justify-center gap-8 animate-fadeIn">
                    <FeatureBox icon={FaFileAlt} title="Find Your Document" description="Search and locate your PDF, Excel, or CSV files." />
                    <FeatureBox icon={FaUpload} title="Create Collection" description="Go to the collection page in the sidebar to create a new collection for your documents." />
                    <FeatureBox icon={FaComments} title="Interact with Your Documents" description="Select your newly created collection and start chatting with your documents to get insights and answers." />
                </div>
            </section>

            <section className="cta-section mt-16">
                <Link
                    to="/chat"
                    className="bg-blue-500 text-white text-lg md:text-xl py-3 px-8 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 animate-bounce"
                >
                    Start Chatting with Your Documents
                </Link>
            </section>


        </div>
    );
};

export default HomePage;
