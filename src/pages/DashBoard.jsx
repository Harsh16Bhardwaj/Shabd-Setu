import { useState } from "react";
import {
  Upload,
  Video,
  FileText,
  Languages,
  Pencil,
  Eye,
} from "lucide-react";
import Footer from "../components/footer/footer";
import Header from "../components/header/Header";

const languages = [
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
  { code: "gu", name: "Gujarati" },
  { code: "ta", name: "Tamil" },
  { code: "kn", name: "Kannada" },
  { code: "te", name: "Telugu" },
  { code: "bn", name: "Bengali" },
  { code: "ml", name: "Malayalam" },
  { code: "pa", name: "Punjabi" },
  { code: "or", name: "Odia" },
];

function Dashboard({ onBack }) {
  const [activeTab, setActiveTab] = useState("editor");
  const [selectedLanguages, setSelectedLanguages] = useState(["hi"]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handlePublish = () => {
    alert("Publishing content in selected languages...");
  };

  const handleTranscribe = () => {
    setIsTranscribing(true);
    setTimeout(() => {
      setIsTranscribing(false);
      setContent("Your transcribed content will appear here...");
      alert("Video transcribed successfully!");
    }, 2000);
  };

  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      setIsTranslating(false);
      alert(`Content translated to ${selectedLanguages.length} languages`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm w-fit">
          {["editor", "preview"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-md font-medium transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center gap-2">
                {tab === "editor" ? (
                  <Pencil className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {activeTab === "editor" ? (
            <>
              {/* Language Selection */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Target Languages
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguages((prev) =>
                          prev.includes(lang.code)
                            ? prev.filter((l) => l !== lang.code)
                            : [...prev, lang.code]
                        );
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedLanguages.includes(lang.code)
                          ? "bg-indigo-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </section>

              {/* Content Input */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Content
                  </h2>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                  <textarea
                    placeholder="Write your blog content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all min-h-[200px] resize-y"
                  />
                </div>
              </section>

              {/* Video Upload */}
              <section className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Video Content
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Video URL"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    />
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </button>
                  </div>
                  {videoUrl && (
                    <button
                      onClick={handleTranscribe}
                      disabled={isTranscribing}
                      className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${
                        isTranscribing
                          ? "bg-gray-100 text-gray-500"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {isTranscribing ? "Transcribing..." : "Transcribe Video"}
                    </button>
                  )}
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleTranslate}
                  disabled={isTranslating || !content}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    isTranslating || !content
                      ? "bg-gray-100 text-gray-500"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {isTranslating ? "Translating..." : "Translate Content"}
                </button>
                <button
                  onClick={handlePublish}
                  disabled={!content || selectedLanguages.length === 0}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    !content || selectedLanguages.length === 0
                      ? "bg-gray-100 text-gray-500"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Publish
                </button>
              </div>
            </>
          ) : (
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {title || "Untitled Blog"}
              </h2>
              <div className="prose max-w-none">
                {content || "No content to preview"}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
