import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const ChatBot = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
          <p className="text-gray-600">
            This page is still under development. Check back later!
          </p>
          <Link to="/" className="text-blue-500 hover:underline mt-4">
            Go Back to Home Page
          </Link>{" "}
        </div>
      </div>
      <Helmet>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/a06079e7-be7a-4c19-921b-7f63211f56fd/webchat/config.js"
          defer
        ></script>
      </Helmet>
    </>
  );
};

export default ChatBot;
