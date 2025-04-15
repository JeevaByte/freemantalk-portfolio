
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, BookOpen, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialMediaIntegration = () => {
  const { toast } = useToast();
  const [mediumToken, setMediumToken] = useState("");
  const [mediumConnected, setMediumConnected] = useState(false);
  const [linkedinToken, setLinkedinToken] = useState("");
  const [linkedinConnected, setLinkedinConnected] = useState(false);
  const [autoPostEnabled, setAutoPostEnabled] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  
  const handleMediumConnect = () => {
    if (!mediumToken) {
      toast({
        title: "Error",
        description: "Please enter your Medium integration token",
        variant: "destructive",
      });
      return;
    }
    
    setIsConnecting(true);
    
    // Simulate API connection
    setTimeout(() => {
      setMediumConnected(true);
      setIsConnecting(false);
      
      toast({
        title: "Connected",
        description: "Successfully connected to your Medium account",
      });
      
      // In a real implementation, store this token securely
      localStorage.setItem("medium_token", mediumToken);
    }, 1500);
  };
  
  const handleLinkedinConnect = () => {
    if (!linkedinToken) {
      toast({
        title: "Error",
        description: "Please enter your LinkedIn integration token",
        variant: "destructive",
      });
      return;
    }
    
    setIsConnecting(true);
    
    // Simulate API connection
    setTimeout(() => {
      setLinkedinConnected(true);
      setIsConnecting(false);
      
      toast({
        title: "Connected",
        description: "Successfully connected to your LinkedIn account",
      });
      
      // In a real implementation, store this token securely
      localStorage.setItem("linkedin_token", linkedinToken);
    }, 1500);
  };
  
  const handleDisconnect = (platform: 'medium' | 'linkedin') => {
    if (platform === 'medium') {
      setMediumConnected(false);
      setMediumToken("");
      localStorage.removeItem("medium_token");
    } else {
      setLinkedinConnected(false);
      setLinkedinToken("");
      localStorage.removeItem("linkedin_token");
    }
    
    toast({
      title: "Disconnected",
      description: `Successfully disconnected from your ${platform === 'medium' ? 'Medium' : 'LinkedIn'} account`,
    });
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <Tabs defaultValue="medium" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="medium" className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>Medium</span>
          </TabsTrigger>
          <TabsTrigger value="linkedin" className="flex items-center gap-2">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="medium" className="space-y-4">
          {!mediumConnected ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="medium-token">Medium Integration Token</Label>
                <Input
                  id="medium-token"
                  type="password"
                  placeholder="Enter your Medium integration token"
                  value={mediumToken}
                  onChange={(e) => setMediumToken(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  You can find your Medium integration token in your Medium account settings.
                </p>
              </div>
              
              <Button 
                onClick={handleMediumConnect} 
                disabled={isConnecting}
                className="w-full"
              >
                {isConnecting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  "Connect Medium Account"
                )}
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded">
                ✓ Connected to Medium
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="medium-auto-post"
                  checked={autoPostEnabled}
                  onCheckedChange={setAutoPostEnabled}
                />
                <Label htmlFor="medium-auto-post">Auto-post new blog articles to Medium</Label>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => handleDisconnect('medium')}
                className="w-full text-destructive hover:text-destructive"
              >
                Disconnect Medium Account
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="linkedin" className="space-y-4">
          {!linkedinConnected ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="linkedin-token">LinkedIn Integration Token</Label>
                <Input
                  id="linkedin-token"
                  type="password"
                  placeholder="Enter your LinkedIn integration token"
                  value={linkedinToken}
                  onChange={(e) => setLinkedinToken(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  You can generate a LinkedIn API token from your LinkedIn Developer account.
                </p>
              </div>
              
              <Button 
                onClick={handleLinkedinConnect} 
                disabled={isConnecting}
                className="w-full"
              >
                {isConnecting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  "Connect LinkedIn Account"
                )}
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded">
                ✓ Connected to LinkedIn
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="linkedin-auto-post"
                  checked={autoPostEnabled}
                  onCheckedChange={setAutoPostEnabled}
                />
                <Label htmlFor="linkedin-auto-post">Auto-post new blog articles to LinkedIn</Label>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => handleDisconnect('linkedin')}
                className="w-full text-destructive hover:text-destructive"
              >
                Disconnect LinkedIn Account
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 pt-4 border-t border-border">
        <h3 className="text-sm font-medium mb-2">About Social Media Integration</h3>
        <p className="text-sm text-muted-foreground">
          Connecting your Medium and LinkedIn accounts allows you to automatically publish your blog posts 
          to these platforms. When you publish a new article on your blog, it will also be posted to your
          connected accounts if auto-posting is enabled.
        </p>
      </div>
    </div>
  );
};

export default SocialMediaIntegration;
