import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Album } from "lucide-react";

const reasons = [
    "You always make me smile.",
    "You support me no matter what.",
    "Your kindness is unmatched.",
    "You give the best hugs!",
    "You make even the smallest moments special.",
    "You're my best friend and soulmate.",
    "Your laugh is contagious!",
    "You inspire me every day.",
    "You always know how to cheer me up.",
    "You make my world brighter."
];


function Home() {
    const [reason, setReason] = useState(reasons[0]);

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
                                className="bg-red-400 text-white px-4 py-2 rounded-lg"
                            >
                                Give Me Another Reason ❤️
                            </Button>
                        </CardContent>
                    </TabsContent>
                    <TabsContent value="memories">
                        <CardContent className="text-center">
                            <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                                Our Special Memories
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Coming soon - a collection of our most cherished moments together!
                            </p>
                        </CardContent>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    );
}

export default Home;