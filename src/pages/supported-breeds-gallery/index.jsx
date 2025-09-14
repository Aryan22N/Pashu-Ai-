import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import SearchAndFilters from "./components/SearchAndFilters";
import BreedGrid from "./components/BreedGrid";
import ComparisonModal from "./components/ComparisonModal";
import BreedDetailsModal from "./components/BreedDetailsModal";

const SupportedBreedsGallery = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedBreedForDetails, setSelectedBreedForDetails] = useState(null);
  const [filters, setFilters] = useState({
    type: "all",
    region: "all",
    milkProduction: "all",
    climate: "all",
  });

  // Mock data for Indian cattle and buffalo breeds
  const allBreeds = [
    {
      id: 1,
      nameEn: "Gir",
      nameHi: "गिर",
      type: "cattle",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7TV8GEV5nlmdzb38uWkF78qsX2HlnWebvfayh3ZxLEJj2bOHgR_5dDQ-FjwoUQUpJn0rA-Ep_YeagR7-8iyzQEiL7hCMiQCIuyW7YFg",
      descriptionEn:
        "Gir cattle are one of the principal Zebu breeds originating in India. They are known for their distinctive appearance and excellent milk production.",
      descriptionHi:
        "गिर गाय भारत की मुख्य जेबू नस्लों में से एक है। ये अपनी विशिष्ट उपस्थिति और उत्कृष्ट दूध उत्पादन के लिए जानी जाती हैं।",
      regionEn: "Gujarat, Rajasthan",
      regionHi: "गुजरात, राजस्थान",
      milkProduction: 12,
      climateEn: "Tropical",
      climateHi: "उष्णकटिबंधीय",
      breedingCharacteristicsEn:
        "Gir cattle are known for their docile temperament, heat tolerance, and disease resistance. They have a distinctive domed forehead and drooping ears.",
      breedingCharacteristicsHi:
        "गिर गाय अपने शांत स्वभाव, गर्मी सहनशीलता और रोग प्रतिरोधक क्षमता के लिए जानी जाती है। इनका माथा गुंबदाकार और कान लटकते हुए होते हैं।",
      geographicalDistributionHi:
        "मुख्यतः गुजरात के गिर जंगल क्षेत्र में पाई जाती है, अब राजस्थान और अन्य राज्यों में भी पाली जाती है।",
      geographicalDistributionEn:
        "Primarily found in the Gir forest region of Gujarat, now also bred in Rajasthan and other states.",
      agriculturalSignificanceHi:
        "दूध उत्पादन और बैल के रूप में कृषि कार्यों में महत्वपूर्ण भूमिका निभाती है।",
      agriculturalSignificanceEn:
        "Plays an important role in milk production and as draft animals for agricultural work.",
    },
    {
      id: 2,
      nameEn: "Sahiwal",
      nameHi: "साहीवाल",
      type: "cattle",
      image: "https://cpimg.tistatic.com/7831754/b/1/sahiwal-cattle-breed.jpg",
      descriptionEn:
        "Sahiwal is a breed of zebu cattle from the Sahiwal district of Punjab. They are excellent milk producers and well-adapted to hot climates.",
      descriptionHi:
        "साहीवाल पंजाब के साहीवाल जिले की जेबू गायों की एक नस्ल है। ये उत्कृष्ट दूध उत्पादक हैं और गर्म जलवायु के लिए अच्छी तरह अनुकूलित हैं।",
      regionEn: "Punjab, Haryana",
      regionHi: "पंजाब, हरियाणा",
      milkProduction: 15,
      climateEn: "Subtropical",
      climateHi: "उपोष्णकटिबंधीय",
      breedingCharacteristicsEn:
        "Sahiwal cattle are known for their high milk yield, heat tolerance, and gentle nature. They have a reddish-brown coat color.",
      breedingCharacteristicsHi:
        "साहीवाल गाय अपने उच्च दूध उत्पादन, गर्मी सहनशीलता और सौम्य प्रकृति के लिए जानी जाती है। इनका रंग लाल-भूरा होता है।",
      geographicalDistributionHi:
        "मूल रूप से पंजाब के साहीवाल जिले से, अब उत्तर भारत के कई राज्यों में पाली जाती है।",
      geographicalDistributionEn:
        "Originally from Sahiwal district of Punjab, now bred in many states of North India.",
      agriculturalSignificanceHi:
        "उच्च दूध उत्पादन के कारण डेयरी उद्योग में अत्यधिक महत्वपूर्ण।",
      agriculturalSignificanceEn:
        "Extremely important in dairy industry due to high milk production.",
    },
    {
      id: 3,
      nameEn: "Red Sindhi",
      nameHi: "लाल सिंधी",
      type: "cattle",
      image:
        "https://1.bp.blogspot.com/-HJd0lMZmoDs/T9wELnJbZNI/AAAAAAAAAcY/9WqUNbiSYL0/s600/Red+Sindhi.jpg",
      descriptionEn:
        "Red Sindhi is a dairy breed of zebu cattle. They are known for their reddish coat color and excellent milk production capabilities.",
      descriptionHi:
        "लाल सिंधी जेबू गायों की एक डेयरी नस्ल है। ये अपने लाल रंग के कोट और उत्कृष्ट दूध उत्पादन क्षमता के लिए जानी जाती हैं।",
      regionEn: "Sindh, Rajasthan",
      regionHi: "सिंध, राजस्थान",
      milkProduction: 10,
      climateEn: "Arid",
      climateHi: "शुष्क",
      breedingCharacteristicsEn:
        "Red Sindhi cattle are hardy, heat-tolerant, and have good disease resistance. They are well-suited for arid and semi-arid regions.",
      breedingCharacteristicsHi:
        "लाल सिंधी गाय कठोर, गर्मी सहनशील और अच्छी रोग प्रतिरोधक क्षमता वाली होती हैं। ये शुष्क और अर्ध-शुष्क क्षेत्रों के लिए उपयुक्त हैं।",
      geographicalDistributionHi:
        "मूल रूप से सिंध प्रांत से, अब राजस्थान, गुजरात और अन्य शुष्क क्षेत्रों में पाली जाती है।",
      geographicalDistributionEn:
        "Originally from Sindh province, now bred in Rajasthan, Gujarat and other arid regions.",
      agriculturalSignificanceHi:
        "शुष्क क्षेत्रों में दूध उत्पादन के लिए महत्वपूर्ण नस्ल।",
      agriculturalSignificanceEn:
        "Important breed for milk production in arid regions.",
    },
    {
      id: 4,
      nameEn: "Murrah Buffalo",
      nameHi: "मुर्रा भैंस",
      type: "buffalo",
      image:
        "https://shahjighee.com/wp-content/uploads/2024/05/Indian_A2_murrah_buffalo_600x600.jpg?v=1670062699",
      descriptionEn:
        "Murrah is a breed of water buffalo mainly kept for milk production. They are known for their high milk yield and fat content.",
      descriptionHi:
        "मुर्रा मुख्यतः दूध उत्पादन के लिए पाली जाने वाली भैंस की एक नस्ल है। ये अपने उच्च दूध उत्पादन और वसा की मात्रा के लिए जानी जाती हैं।",
      regionEn: "Haryana, Punjab",
      regionHi: "हरियाणा, पंजाब",
      milkProduction: 18,
      climateEn: "Subtropical",
      climateHi: "उपोष्णकटिबंधीय",
      breedingCharacteristicsEn:
        "Murrah buffaloes are known for their high milk production, docile nature, and adaptability to various climatic conditions.",
      breedingCharacteristicsHi:
        "मुर्रा भैंस अपने उच्च दूध उत्पादन, शांत स्वभाव और विभिन्न जलवायु परिस्थितियों में अनुकूलन के लिए जानी जाती है।",
      geographicalDistributionHi:
        "मुख्यतः हरियाणा और पंजाब में पाई जाती है, अब पूरे भारत में पाली जाती है।",
      geographicalDistributionEn:
        "Mainly found in Haryana and Punjab, now bred throughout India.",
      agriculturalSignificanceHi: "भारत में दूध उत्पादन की रीढ़ मानी जाती है।",
      agriculturalSignificanceEn:
        "Considered the backbone of milk production in India.",
    },
    {
      id: 5,
      nameEn: "Nili-Ravi Buffalo",
      nameHi: "नीली-रावी भैंस",
      type: "buffalo",
      image:
        "https://timesofagriculture.in/wp-content/uploads/2024/02/ff88ce.jpg",
      descriptionEn:
        "Nili-Ravi is a breed of water buffalo found mainly in Punjab. They are excellent milk producers with distinctive markings.",
      descriptionHi:
        "नीली-रावी मुख्यतः पंजाब में पाई जाने वाली भैंस की एक नस्ल है। ये विशिष्ट निशानों के साथ उत्कृष्ट दूध उत्पादक हैं।",
      regionEn: "Punjab, Haryana",
      regionHi: "पंजाब, हरियाणा",
      milkProduction: 16,
      climateEn: "Subtropical",
      climateHi: "उपोष्णकटिबंधीय",
      breedingCharacteristicsEn:
        "Nili-Ravi buffaloes have distinctive white markings on face and legs, high milk production, and good heat tolerance.",
      breedingCharacteristicsHi:
        "नीली-रावी भैंस के चेहरे और पैरों पर विशिष्ट सफेद निशान होते हैं, उच्च दूध उत्पादन और अच्छी गर्मी सहनशीलता होती है।",
      geographicalDistributionHi:
        "पंजाब के रावी और सतलुज नदी क्षेत्रों में मुख्यतः पाई जाती है।",
      geographicalDistributionEn:
        "Mainly found in Ravi and Sutlej river areas of Punjab.",
      agriculturalSignificanceHi:
        "उत्तर भारत में दूध उत्पादन के लिए महत्वपूर्ण नस्ल।",
      agriculturalSignificanceEn:
        "Important breed for milk production in North India.",
    },
    {
      id: 6,
      nameEn: "Tharparkar",
      nameHi: "थारपारकर",
      type: "cattle",
      image:
        "https://c8.alamy.com/comp/RMCJWF/tharparkar-indian-cattle-breed-belongs-to-the-zebus-species-bos-indicus-which-are-also-referred-to-as-humpback-cattle-RMCJWF.jpg",
      descriptionEn:
        "Tharparkar is a dual-purpose breed known for both milk production and draft work. They are well-adapted to arid conditions.",
      descriptionHi:
        "थारपारकर एक द्विउद्देश्यीय नस्ल है जो दूध उत्पादन और कृषि कार्य दोनों के लिए जानी जाती है। ये शुष्क परिस्थितियों के लिए अच्छी तरह अनुकूलित हैं।",
      regionEn: "Rajasthan, Gujarat",
      regionHi: "राजस्थान, गुजरात",
      milkProduction: 8,
      climateEn: "Arid",
      climateHi: "शुष्क",
      breedingCharacteristicsEn:
        "Tharparkar cattle are hardy, drought-resistant, and can survive on poor quality fodder. They have a white or light grey coat.",
      breedingCharacteristicsHi:
        "थारपारकर गाय कठोर, सूखा प्रतिरोधी हैं और खराब गुणवत्ता के चारे पर जीवित रह सकती हैं। इनका रंग सफेद या हल्का स्लेटी होता है।",
      geographicalDistributionHi:
        "राजस्थान के थार रेगिस्तान क्षेत्र में मुख्यतः पाई जाती है।",
      geographicalDistributionEn:
        "Mainly found in Thar desert region of Rajasthan.",
      agriculturalSignificanceHi:
        "शुष्क क्षेत्रों में दूध और कृषि कार्य दोनों के लिए महत्वपूर्ण।",
      agriculturalSignificanceEn:
        "Important for both milk and agricultural work in arid regions.",
    },
    {
      id: 7,
      nameEn: "Kankrej",
      nameHi: "कांकरेज",
      type: "cattle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Kankrej_01.JPG",
      descriptionEn:
        "Kankrej is a dual-purpose breed known for both milk production and draft power. They are well-adapted to hot and humid conditions.",
      descriptionHi:
        "कांकरेज एक द्विउद्देश्यीय नस्ल है जो दूध उत्पादन और कृषि शक्ति दोनों के लिए जानी जाती है। ये गर्म और आर्द्र परिस्थितियों के लिए अच्छी तरह अनुकूलित हैं।",
      regionEn: "Gujarat, Rajasthan",
      regionHi: "गुजरात, राजस्थान",
      milkProduction: 9,
      climateEn: "Tropical",
      climateHi: "उष्णकटिबंधीय",
      breedingCharacteristicsEn:
        "Kankrej cattle are known for their strength, endurance, and ability to work in hot conditions. They have a silver-grey coat color.",
      breedingCharacteristicsHi:
        "कांकरेज गाय अपनी शक्ति, सहनशीलता और गर्म परिस्थितियों में काम करने की क्षमता के लिए जानी जाती है। इनका रंग चांदी-स्लेटी होता है।",
      geographicalDistributionHi:
        "गुजरात और राजस्थान की सीमावर्ती क्षेत्रों में पाई जाती है।",
      geographicalDistributionEn:
        "Found in border areas of Gujarat and Rajasthan.",
      agriculturalSignificanceHi:
        "कृषि कार्य और दूध उत्पादन दोनों के लिए महत्वपूर्ण।",
      agriculturalSignificanceEn:
        "Important for both agricultural work and milk production.",
    },
    {
      id: 8,
      nameEn: "Surti Buffalo",
      nameHi: "सूरती भैंस",
      type: "buffalo",
      image:
        "https://i.pinimg.com/564x/2f/b8/cc/2fb8cc3ffa0c2f481bcaa471b3a804e2.jpg",
      descriptionEn:
        "Surti is a breed of water buffalo known for high-fat milk content. They are smaller in size but excellent milk producers.",
      descriptionHi:
        "सूरती भैंस की एक नस्ल है जो उच्च वसा युक्त दूध के लिए जानी जाती है। ये आकार में छोटी हैं लेकिन उत्कृष्ट दूध उत्पादक हैं।",
      regionEn: "Gujarat, Maharashtra",
      regionHi: "गुजरात, महाराष्ट्र",
      milkProduction: 12,
      climateEn: "Tropical",
      climateHi: "उष्णकटिबंधीय",
      breedingCharacteristicsEn:
        "Surti buffaloes are compact, hardy, and produce milk with high fat content. They are well-suited for small-scale dairy farming.",
      breedingCharacteristicsHi:
        "सूरती भैंस संक्षिप्त, कठोर हैं और उच्च वसा युक्त दूध का उत्पादन करती हैं। ये छोटे पैमाने की डेयरी फार्मिंग के लिए उपयुक्त हैं।",
      geographicalDistributionHi:
        "गुजरात के सूरत जिले और आसपास के क्षेत्रों में पाई जाती है।",
      geographicalDistributionEn:
        "Found in Surat district of Gujarat and surrounding areas.",
      agriculturalSignificanceHi:
        "छोटे किसानों के लिए दूध उत्पादन में महत्वपूर्ण भूमिका।",
      agriculturalSignificanceEn:
        "Plays important role in milk production for small farmers.",
    },
  ];

  // Filter breeds based on search and filters
  const filteredBreeds = allBreeds?.filter((breed) => {
    const matchesSearch =
      searchTerm === "" ||
      breed?.nameEn?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      breed?.nameHi?.includes(searchTerm) ||
      breed?.descriptionEn
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase()) ||
      breed?.descriptionHi?.includes(searchTerm);

    const matchesType =
      filters?.type === "all" || breed?.type === filters?.type;

    const matchesRegion =
      filters?.region === "all" ||
      breed?.regionEn?.toLowerCase()?.includes(filters?.region) ||
      breed?.regionHi?.includes(filters?.region);

    const matchesMilkProduction =
      filters?.milkProduction === "all" ||
      (filters?.milkProduction === "high" && breed?.milkProduction > 15) ||
      (filters?.milkProduction === "medium" &&
        breed?.milkProduction >= 8 &&
        breed?.milkProduction <= 15) ||
      (filters?.milkProduction === "low" && breed?.milkProduction < 8);

    const matchesClimate =
      filters?.climate === "all" ||
      breed?.climateEn?.toLowerCase()?.includes(filters?.climate) ||
      breed?.climateHi?.includes(filters?.climate);

    return (
      matchesSearch &&
      matchesType &&
      matchesRegion &&
      matchesMilkProduction &&
      matchesClimate
    );
  });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      type: "all",
      region: "all",
      milkProduction: "all",
      climate: "all",
    });
    setSearchTerm("");
  };

  const handleSelectBreed = (breedId) => {
    setSelectedBreeds((prev) => {
      if (prev?.includes(breedId)) {
        return prev?.filter((id) => id !== breedId);
      } else if (prev?.length < 3) {
        return [...prev, breedId];
      }
      return prev;
    });
  };

  const handleShowComparison = () => {
    if (selectedBreeds?.length >= 2) {
      setShowComparison(true);
    }
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
  };

  const handleToggleDetails = (breed) => {
    setSelectedBreedForDetails(breed);
  };

  const handleCloseDetails = () => {
    setSelectedBreedForDetails(null);
  };

  const selectedBreedsData = allBreeds?.filter((breed) =>
    selectedBreeds?.includes(breed?.id)
  );

  return (
    <div className="min-h-screen bg-background pt-20">
      <Helmet>
        <title>
          {language === "hi"
            ? "समर्थित नस्लें गैलरी - Cattle Breed Recognition"
            : "Supported Breeds Gallery - Cattle Breed Recognition"}
        </title>
        <meta
          name="description"
          content={
            language === "hi"
              ? "भारतीय गाय और भैंस की नस्लों की व्यापक जानकारी। AI पहचान प्रणाली द्वारा समर्थित नस्लों को देखें।"
              : "Comprehensive information about Indian cattle and buffalo breeds supported by AI identification system."
          }
        />
      </Helmet>
      <div className="mx-4 lg:mx-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Icon name="Grid3X3" size={32} className="text-primary" />
          </div>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            {language === "hi"
              ? "समर्थित नस्लें गैलरी"
              : "Supported Breeds Gallery"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "hi"
              ? "हमारी AI पहचान प्रणाली द्वारा समर्थित भारतीय गाय और भैंस की नस्लों की व्यापक जानकारी प्राप्त करें। प्रत्येक नस्ल की विशेषताओं, भौगोलिक वितरण और कृषि महत्व के बारे में जानें।"
              : "Explore comprehensive information about Indian cattle and buffalo breeds supported by our AI identification system. Learn about characteristics, geographical distribution, and agricultural significance of each breed."}
          </p>
        </div>

        {/* Search and Filters */}
        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          filters={filters}
          onFilterChange={handleFilterChange}
          totalCount={allBreeds?.length}
          filteredCount={filteredBreeds?.length}
          onClearFilters={handleClearFilters}
          language={language}
          t={t}
        />

        {/* Comparison Bar */}
        {selectedBreeds?.length > 0 && (
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="GitCompare" size={20} className="text-primary" />
                <span className="font-medium text-foreground">
                  {language === "hi"
                    ? `${selectedBreeds?.length} नस्लें चुनी गई हैं`
                    : `${selectedBreeds?.length} breeds selected`}
                </span>
                <span className="text-sm text-muted-foreground">
                  {language === "hi"
                    ? "(अधिकतम 3 तक चुन सकते हैं)"
                    : "(max 3 can be selected)"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedBreeds([])}
                  iconName="X"
                  iconPosition="left"
                >
                  {language === "hi" ? "साफ़ करें" : "Clear"}
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleShowComparison}
                  disabled={selectedBreeds?.length < 2}
                  iconName="GitCompare"
                  iconPosition="left"
                >
                  {language === "hi" ? "तुलना करें" : "Compare"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Breeds Grid */}
        <BreedGrid
          breeds={filteredBreeds}
          selectedBreeds={selectedBreeds}
          onSelectBreed={handleSelectBreed}
          onToggleDetails={handleToggleDetails}
          language={language}
          t={t}
        />

        {/* Comparison Modal */}
        {showComparison && (
          <ComparisonModal
            breeds={selectedBreedsData}
            onClose={handleCloseComparison}
            language={language}
            t={t}
          />
        )}

        {/* Breed Details Modal */}
        {selectedBreedForDetails && (
          <BreedDetailsModal
            breed={selectedBreedForDetails}
            onClose={handleCloseDetails}
            language={language}
            t={t}
          />
        )}
      </div>
      {/* Custom CSS for card flip animation */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SupportedBreedsGallery;
