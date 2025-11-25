import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
//Generate Farmer Image page for Kissan Kart
const GenerateFarmerImage = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState(
    "Create a realistic digital illustration of Telangana farmers working in a field. Show both male and female farmers wearing traditional Telangana attire such as lungi/dhoti, cotton shirt, and saree with a towel on the shoulder. Include natural skin tone and facial features typical of rural Telangana people, with expressions showing confidence. Some farmers should be using a smartphone to access the Kissan Kart e-commerce platform. Background should display crops like paddy or cotton with Telangana village scenery—huts, fields, and mild hills. Ensure no real person is identifiable, only generic representation."
  );
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-farmer-image', {
        body: { prompt }
      });

      if (error) throw error;

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setImageUrl(data.imageUrl);
      toast({
        title: "Success!",
        description: "Image generated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'telangana-farmers.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Generate Farmer Images</h1>
          <p className="text-muted-foreground mb-8">
            Create realistic illustrations of Telangana farmers using AI
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Image Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="prompt">Describe the image you want to generate</Label>
                    <Textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={12}
                      className="mt-2"
                      disabled={loading}
                    />
                  </div>
                  <Button
                    onClick={handleGenerate}
                    disabled={loading || !prompt}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate Image"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Image</CardTitle>
              </CardHeader>
              <CardContent>
                {imageUrl ? (
                  <div className="space-y-4">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-muted">
                      <img
                        src={imageUrl}
                        alt="Generated Telangana farmers"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="w-full"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Image
                    </Button>
                  </div>
                ) : (
                  <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                    {loading ? "Generating image..." : "Your generated image will appear here"}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenerateFarmerImage;
