import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Album } from "lucide-react";

const reasons = [
  "Your Deep and Transparent Eyes",
  "Your Thick Thighs (aaaaaaa)",
  "Your Butt",
  "The little dance you do after you have good food",
  "The way you put your legs over mine in restaurants",
  "Your Sexy Back",
  "Your Pretty Smile",
  "The lil fake cry",
  "Your face when you sleep",
  "The way you shiver when I kiss your neck",
  "Your cute little nose",
  "Your pretty tummy",
  "Your shy one (iykyk)",
  "Your beautiful boobas (with all respect MINE)",
  "The way you tell me not to smoke",
  "The way your eyes lit up when you see good food",
  "Chili Chicken Laccha Paratha",
  "Food made by you (Besi paini but yes I love it)",
  "Your eyebrows (cutie)",
  "Your zulfein",
  "The way you say 'I love you'",
  "The way your eyes lit up when you go shopping",
  "The way you care about me",
  "When you make me call you mommy",
  "The way you let me put my head on your chest and cuddle me",
];

function Home() {
  const [reason, setReason] = useState(reasons[0]);
  const [gifUrl, setGifUrl] = useState("");

  // Function to fetch a random love GIF from Tenor
  const fetchRandomGif = async () => {
    try {
      const res = await fetch(
        "https://g.tenor.com/v1/random?q=love+cute&key=LIVDSRZULELA&limit=1"
      );
      const data = await res.json();
      if (data?.results?.length > 0) {
        setGifUrl(data.results[0].media[0].gif.url);
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  useEffect(() => {
    fetchRandomGif(); // Fetch GIF on mount
  }, []);

  const getRandomReason = () => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    setReason(reasons[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <motion.h1
        className="text-4xl font-bold text-red-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Happy Valentine's Day, Trisa! ❤️
      </motion.h1>

      {/* Random Love GIF */}
      {gifUrl ? (
        <img
          src={gifUrl}
          alt="Random love gif"
          className="mb-6 w-full max-w-md rounded-lg shadow-lg"
        />
      ) : (
        <div className="mb-6 w-full max-w-md flex items-center justify-center">
          Loading GIF...
        </div>
      )}

      <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <Tabs defaultValue="reasons" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-pink-50">
            <TabsTrigger
              value="reasons"
              className="flex items-center gap-2 text-pink-600 data-[state=active]:bg-pink-200"
            >
              <Heart className="h-5 w-5" />
              1000 Things
            </TabsTrigger>
            <TabsTrigger
              value="memories"
              className="flex items-center gap-2 text-pink-600 data-[state=active]:bg-pink-200"
            >
              <Album className="h-5 w-5" />
              Memories
            </TabsTrigger>
          </TabsList>
          <TabsContent value="reasons">
            <CardContent className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                Thousand Things I Love About You
              </h2>
              <p className="text-lg text-gray-700 italic mb-4">{reason}</p>
              <Button
                onClick={getRandomReason}
                className="bg-red-400 text-white px-4 py-2 rounded-lg mb-2"
              >
                Give Me Another Reason ❤️
              </Button>
              <Button
                onClick={fetchRandomGif}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg"
              >
                New GIF 💕
              </Button>
            </CardContent>
          </TabsContent>
          <TabsContent value="memories">
            <CardContent className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                Our Special Memories
              </h2>
              <p className="text-gray-700 mb-4">
                Coming soon - a collection of our most cherished moments
                together!
              </p>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

export default Home;
