import React, { useState } from 'react';
import logo from './assets/logo.jpg'; // Adjust the path as necessary
import plus18 from './assets/18.png'; // Adjust the path as necessary

import img1 from './assets/screenshot1.jpg'; // Adjust the path as necessary
import img2 from './assets/screenshot2.jpg'; // Adjust the path as necessary
import img3 from './assets/screenshot3.jpg'; // Adjust the path as necessary
import {
  Star,
  Download,
  Shield,
  Bookmark,
  ChevronRight,
  Smartphone,
  Package,
  ShieldCheck,
  Calendar,
  User,
  MessageCircle,
  MonitorSmartphone
} from 'lucide-react';
import { LuBookmarkPlus } from "react-icons/lu";


export default function AppInstallPage() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({
    raj: 149,
    aryan: 87,
    arjun: 250
  });
  const [votedReviews, setVotedReviews] = useState(new Set());

  const handleInstall = () => {
    alert(
      'Click OK to start downloading the 7StarBet app. Once the download is complete, open the file to install it on your device.'
    );
    window.location.href = '/apk/7StarBet.apk';
  };


  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleHelpfulVote = (reviewId) => {
    if (!votedReviews.has(reviewId)) {
      setHelpfulVotes(prev => ({
        ...prev,
        [reviewId]: prev[reviewId] + 1
      }));
      setVotedReviews(prev => new Set([...prev, reviewId]));
    }
  };

  const StarRating = ({ rating, showCount = false, count = "" }) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 fill-[#0b7756] text-[#01875F] hover:fill-[#078064] hover:text-[#029E79]`}
        />
      ))}
      {showCount && <span className="text-xs text-gray-600 ml-1">{count}</span>}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen font-sans">
      {/* App Header */}
      <div className="w-full p-6 pb-4 max-w-full flex flex-col gap-4">

        {/* Top row: Logo and name/details side-by-side always */}
        <div className="flex flex-row items-center gap-4">

          {/* Logo */}
          <div className="w-16 sm:w-20 md:w-24 aspect-square rounded-lg overflow-hidden border border-gray-200 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img
              src={logo}
              alt="Slot Machine"
              className="w-full h-full object-cover relative z-10"
              onLoad={(e) => e.target.previousSibling.remove()}
            />
          </div>

          {/* App name and developer info */}
          <div className="flex flex-col text-left">
            <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 tracking-wide leading-snug">
              7StarBet
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
              विकासकर्ता: बिल्बेट गेमिंग - उत्पादन व्यापार
            </p>
          </div>

        </div>

        {/* Icons row */}
        <div className="flex flex-nowrap items-center justify-between gap-4 sm:gap-6 text-sm overflow-x-auto">

          {/* Rating */}
          <div className="text-center flex-1 min-w-[80px]">
            <div className="text-base font-medium text-gray-900 mb-1">4.3★</div>
            <div className="text-xs text-gray-600">7.5K समीक्षाहरू</div>
          </div>

          {/* Downloads */}
          <div className="text-center flex-1 min-w-[80px]">
            <div className="text-base font-medium text-gray-900 mb-1">100K+</div>
            <div className="text-xs text-gray-600">डाउनलोडहरू</div>
          </div>

          {/* Verification */}
          <div className="text-center flex-1 min-w-[80px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="mx-auto mb-1 text-gray-600 fill-current"
            >
              <rect fill="none" width="20" height="20" />
              <path d="M10.54,11.09L8.66,9.22l-1.02,1.02l2.9,2.9l5.8-5.8l-1.02-1.01L10.54,11.09z M15.8,16.24H8.2L4.41,9.66L8.2,3h7.6l3.79,6.66 L15.8,16.24z M17,1H7L2,9.66l5,8.64V23l5-2l5,2v-4.69l5-8.64L17,1z" />
            </svg>
            <div className="text-xs text-gray-600">सत्यापनको रेटिंग</div>
          </div>

          {/* 18+ */}
          <div className="text-center flex-1 min-w-[80px] hidden sm:block">
            <img src={plus18} alt="18+" className="w-4 h-4 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Rated for 18+</div>
          </div>
        </div>

      </div>




      {/* Install Button */}
      <div className="px-6 py-4">
        <button
          onClick={handleInstall}
          className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-1.5 px-6 rounded text-sm transition-colors duration-200"
        >
          Install App
        </button>


        <div className="flex items-center justify-center mt-5 mb-3">
          <button
            onClick={handleBookmark}
            className="flex items-center gap-2 text-green-700 hover:text-green-600 text-sm"
          >
            <LuBookmarkPlus className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span>इच्छासूचीमा थप्नुहोस्</span>
          </button>
        </div>

        <div className="flex items-center gap-2 mt-3 mb-2 text-sm text-gray-600">
          <MonitorSmartphone className="w-5 h-5 text-gray-700" />
          <span>तपाईंको सबै यन्त्रहरूमा यो एप चल्छ</span>
        </div>

      </div>

      {/* Screenshots */}
      <div className="px-6 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          <div className="flex-shrink-0 w-48 h-80 rounded-lg overflow-hidden border border-gray-200">
            <img
              src={img1}
              alt="App Screenshot 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-80 rounded-lg overflow-hidden border border-gray-200">
            <img
              src={img2}
              alt="App Screenshot 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-80 rounded-lg overflow-hidden border border-gray-200">
            <img
              src={img3}
              alt="App Screenshot 3"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* About Section */}
      <div className="px-6 py-4 border-t border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-3">यो खेलका बारेमा</h2>
        <div className="text-sm text-gray-700 leading-relaxed">
          <p className="mb-3">सबै नयाँ खेलाडीहरूको लागि बोनस 125%</p>
          <p className="mb-3">Welcome to the "Gamble Theme" game, where a delightful experience and the chance for big wins await you! 🚀</p>
          <p className="mb-3">यहाँ तपाईं वास्तविक पैसासँग खेल्न सक्नुहुन्छ र सजिलै जितेको रकम फिर्ता लिन सक्नुहुन्छ। 💰 यदि तपाईं भाग्यमानी हुनुहुन्छ भने, तपाईंले जीवन बदल्ने जीत हासिल गर्न सक्नुहुन्छ!</p>
          <p className="mb-3">तपाईंको साहसिकता र रणनीतिले तपाईंलाई अद्भुत पुरस्कारहरूमा पुर्याउन सक्छ। चाहे यो रोमाञ्चक फलफूलको स्लट हो वा जुवा कार्डको खेलहरू, हाम्रो खेलले तपाईंलाई हरेक क्षण मनोरञ्जन दिनेछ। 🤞✨</p>
          <p className="mb-3">मा अपडेट गरिएको</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>September 20, 2024</span>
          </div>
        </div>
      </div>

      {/* Data Safety */}
      <div className="px-6 py-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">डेटाको सुरक्षा</h2>

        <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
          तपाईंको डेटा सुरक्षित राख्ने मिति तपाईंले यहाँ विकासकर्ताहरूले तपाईंको डेटा कसरी सङ्कलन तथा साझेदार गर्छ भन्ने कुरा बुझ्न जरूरी छ।
          एयसको प्रयोगसम्बन्धी जानकारी, तपाईं क्षेत्र र तपाईंको उमेरका आधारमा डेटाको गोपनीयता र सुरक्षाका अभ्यासहरू फरक हुन सक्छ।
        </p>

        <div className="space-y-6">
          {/* First Item */}
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-gray-600 mt-1" />
            <div className="text-sm">
              <div className="font-medium text-gray-900 mb-1">तेस्रो पक्षसंग कुनै डाटा साझेदार गरिएको</div>
              <a href="#" className="text-green-600 hover:underline">
                विकासकर्ताहरूले प्रयोगकर्ताहरूलाई डेट साझेदार गर्ने बारेमा कसरी जानकारी गराउँछन् भन्नेबारेमा थप जान्नुहोस्
              </a>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex items-start gap-4">
            <Package className="w-6 h-6 text-gray-600 mt-1" />
            <div className="text-sm">
              <div className="font-medium text-gray-900 mb-1">कुनै पनि डेट सङ्कलन गरिएको छैन</div>
              <a href="#" className="text-green-600 hover:underline">
                विकासकर्ताहरूले डेट सङ्कलन गर्ने अभ्यास कसरी खुलासा गर्छन् भन्नेबारेमा थप जान्नुहोस्
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href="#" className="text-green-600 hover:underline text-sm">विवरणहरू हेर्नुहोस्</a>
        </div>
      </div>


      {/* Ratings Overview */}
      <div className="px-6 py-4 border-t border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">मूल्याङ्कन र समीक्षाहरू</h2>

        <div className="flex items-center gap-8 mb-6">
          <div className="text-center">
            <div className="text-6xl font-light text-gray-900 mb-2">4.3</div>
            <StarRating rating={4} />
            <div className="text-sm text-gray-600 mt-1">7.5K समीक्षाहरू</div>
          </div>

          <div className="flex-1 space-y-1">
            {[
              { stars: 5, width: 75 },
              { stars: 4, width: 15 },
              { stars: 3, width: 6 },
              { stars: 2, width: 2 },
              { stars: 1, width: 2 }
            ].map(({ stars, width }) => (
              <div key={stars} className="flex items-center gap-2 text-sm">
                <span className="w-3 text-gray-600">{stars}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-6 py-8 border-t border-gray-200">
        <div className="space-y-10"> {/* Increased spacing between reviews */}

          {/* Review 1 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              R
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium text-gray-900">राज क.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">September 23, 2024</span>
              </div>
              <StarRating rating={5} />
              <p className="text-[15px] text-gray-700 mt-3 mb-4 leading-relaxed">
                यो खेलमा ध्यान दिनुहोस्! मैले यहाँ सजिलै जितेको छु र मेरो जितेको रकम पनि नगद निकालेको छु...
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs text-gray-600">{helpfulVotes.raj} people found this review helpful</span>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>तपाईंको यो समीक्षा सहायक लाग्यो?</span>
                  <button
                    onClick={() => handleHelpfulVote('raj')}
                    className={`px-3 py-1 rounded border text-xs ${votedReviews.has('raj')
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    disabled={votedReviews.has('raj')}
                  >
                    हो
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-xs">
                    होइन
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              आ
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium text-gray-900">आर्यन र.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">September 22, 2024</span>
              </div>
              <StarRating rating={5} />
              <p className="text-[15px] text-gray-700 mt-3 mb-4 leading-relaxed">
                के म यस खेल खेल्दा बारी खुशी महसुस भयो! मैले यहाँ खेलमा जित पनि निकाले...
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">{helpfulVotes.aryan} people found this review helpful</span>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>तपाईंको यो समीक्षा सहायक लाग्यो?</span>
                  <button
                    onClick={() => handleHelpfulVote('aryan')}
                    className={`px-3 py-1 rounded border text-xs ${votedReviews.has('aryan')
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    disabled={votedReviews.has('aryan')}
                  >
                    हो
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-xs">
                    होइन
                  </button>
                </div>
              </div>

              {/*div Developer Response */}
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-900">7StarBet</span>
                  <span className="text-xs text-gray-500">September 23, 2024</span>
                </div>
                <p className="text-sm text-gray-700">प्रतिक्रिया का लागि धन्यवाद!</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              A
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium text-gray-900">Arjun K.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">September 19, 2024</span>
              </div>
              <StarRating rating={5} />
              <p className="text-[15px] text-gray-700 mt-3 mb-4 leading-relaxed">
                मैले यस खेलमा धेरै खुशी पाएँ र मेरो भाग्यले मलाई जिताउनेमा सहयोग गर्यो...
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs text-gray-600">{helpfulVotes.arjun} people found this review helpful</span>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>तपाईंको यो समीक्षा सहायक लाग्यो?</span>
                  <button
                    onClick={() => handleHelpfulVote('arjun')}
                    className={`px-3 py-1 rounded border text-xs ${votedReviews.has('arjun')
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    disabled={votedReviews.has('arjun')}
                  >
                    हो
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-xs">
                    होइन
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* Review 4 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              स
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium text-gray-900">सविना स.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">September 20, 2024</span>
              </div>
              <StarRating rating={5} />
              <p className="text-[15px] text-gray-700 mt-3 mb-4 leading-relaxed">
                पहिलो पटक खेल्दा नै मजा आयो! सजिलो छ, रमाइलो छ, अनि पैसा पनि तुरुन्त निकासी गर्न सकिन्छ। मैले आशा गरेको भन्दा धेरै राम्रो अनुभव भयो। म सबैलाई सिफारिस गर्न चाहन्छु, अवश्य प्रयास गर्नुहोस्!
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">{helpfulVotes.sabina} people found this review helpful</span>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>तपाईंको यो समीक्षा सहायक लाग्यो?</span>
                  <button
                    onClick={() => handleHelpfulVote('sabina')}
                    className={`px-3 py-1 rounded border text-xs ${votedReviews.has('sabina')
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    disabled={votedReviews.has('sabina')}
                  >
                    हो
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-xs">
                    होइन
                  </button>
                </div>
              </div>

              {/* Developer Response */}
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-900">7StarBet</span>
                  <span className="text-xs text-gray-500">September 21, 2024</span>
                </div>
                <p className="text-sm text-gray-700">तपाईंको सकारात्मक प्रतिक्रिया का लागि धन्यवाद! हामी तपाईंको अनुभवलाई अझ राम्रो बनाउने प्रयासमा लागिरहेका छौं।</p>
              </div>
            </div>
          </div>




          {/* Review 5 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              म
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium text-gray-900">मदन थ.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">September 18, 2024</span>
              </div>
              <StarRating rating={4} />
              <p className="text-[15px] text-gray-700 mt-3 mb-4 leading-relaxed">
                इन्टरफेस प्रयोग गर्न सजिलो छ र खेलहरू निकै आकर्षक छन्। मैले पहिलो हप्तामै केहि रकम जितें जुन मैले सोचेको थिएन। कहिलेकाहीं लोड हुन ढिला हुन्छ, तर समग्रमा अनुभव सकारात्मक छ।
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">{helpfulVotes.madan} people found this review helpful</span>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>तपाईंको यो समीक्षा सहायक लाग्यो?</span>
                  <button
                    onClick={() => handleHelpfulVote('madan')}
                    className={`px-3 py-1 rounded border text-xs ${votedReviews.has('madan')
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    disabled={votedReviews.has('madan')}
                  >
                    हो
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-xs">
                    होइन
                  </button>
                </div>
              </div>

              {/* Developer Response */}
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-900">7StarBet</span>
                  <span className="text-xs text-gray-500">September 19, 2024</span>
                </div>
                <p className="text-sm text-gray-700">हामी तपाईंको अनुभवलाई अझ सहज बनाउन काम गरिरहेका छौं। प्रतिक्रिया को लागि धन्यवाद!</p>
              </div>
            </div>
          </div>


          {/* Review 6 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              र
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium text-gray-900">रमेश ज.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">September 16, 2024</span>
              </div>
              <StarRating rating={5} />
              <p className="text-[15px] text-gray-700 mt-3 mb-4 leading-relaxed">
                म यस एपबाट एकदम सन्तुष्ट छु। ग्राहक सेवा पनि छिटो छ र निकासी प्रक्रिया पारदर्शी छ। खेलहरू रमाइलो छन् र समय बिताउन उपयुक्त छन्। धन्यबाद यस्तो राम्रो प्लेटफर्म उपलब्ध गराएकोमा।
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">{helpfulVotes.ramesh} people found this review helpful</span>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>तपाईंको यो समीक्षा सहायक लाग्यो?</span>
                  <button
                    onClick={() => handleHelpfulVote('ramesh')}
                    className={`px-3 py-1 rounded border text-xs ${votedReviews.has('ramesh')
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    disabled={votedReviews.has('ramesh')}
                  >
                    हो
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 text-xs">
                    होइन
                  </button>
                </div>
              </div>

              {/* Developer Response */}
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-gray-900">7StarBet</span>
                  <span className="text-xs text-gray-500">September 17, 2024</span>
                </div>
                <p className="text-sm text-gray-700">हामीलाई खुशी लाग्यो कि तपाईं सन्तुष्ट हुनुहुन्छ! तपाईंको निरन्तर समर्थनको लागि धन्यवाद।</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <a href="#" className="text-green-600 hover:underline text-sm">सबै समीक्षाहरू हेर्नुहोस्</a>
        </div>
      </div>


      {/* Bonus Section */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <h3 className="font-medium text-gray-900 mb-2">सबै नयाँ खेलाडीहरूको लागि बोनस 125%!</h3>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo and Info */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="7StarBet Logo" className="w-10 h-10 rounded" />
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800">7StarBet</p>
              <p>© {new Date().getFullYear()} सबै अधिकार सुरक्षित</p>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/447365446200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2C6.55 2 2.07 6.48 2.07 12c0 1.86.48 3.63 1.4 5.22L2 22l4.94-1.3A9.9 9.9 0 0 0 12.04 22c5.49 0 9.97-4.48 9.97-10S17.53 2 12.04 2zm0 18c-1.57 0-3.1-.41-4.45-1.2l-.32-.2-2.93.77.78-2.85-.2-.33A8.01 8.01 0 1 1 20.04 12c0 4.42-3.58 8-8 8zm4.5-5.3c-.24-.12-1.41-.7-1.63-.78-.22-.08-.39-.12-.55.13-.16.24-.63.78-.78.93-.14.16-.29.18-.53.06a6.5 6.5 0 0 1-1.91-1.17 7.1 7.1 0 0 1-1.3-1.63c-.14-.24-.01-.37.11-.49.12-.12.27-.3.41-.45.14-.16.18-.27.28-.45.09-.18.05-.33-.02-.45-.07-.12-.55-1.32-.75-1.8-.2-.48-.4-.4-.55-.4h-.47c-.16 0-.41.06-.63.27a2.7 2.7 0 0 0-.84 2c0 1.17.84 2.3.95 2.45.12.16 1.65 2.55 4.01 3.57.56.24.99.38 1.33.49.56.18 1.07.16 1.47.1.45-.07 1.41-.57 1.61-1.13.2-.56.2-1.04.14-1.13-.06-.09-.21-.14-.45-.26z" />
              </svg>
              WhatsApp
            </a>

            <a
              href="https://t.me/get_7starbet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.04 15.61 8.7 19.12c.49 0 .7-.22.96-.47l2.3-2.2 4.77 3.48c.88.49 1.5.23 1.72-.82l3.12-14.59h-.01c.28-1.3-.46-1.8-1.34-1.49L2.58 9.44c-1.3.49-1.28 1.2-.23 1.51l4.1 1.28 9.5-5.99c.45-.28.87-.13.53.18l-7.95 7.18z" />
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </footer>




    </div>
  );
}