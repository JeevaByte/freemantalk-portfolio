
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CertificationProps {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  description: string;
  skills: string[];
  badgeUrl: string;
  verificationUrl: string;
}

const CertificationCard = ({
  title,
  issuer,
  issueDate,
  expiryDate,
  credentialId,
  description,
  skills,
  badgeUrl,
  verificationUrl,
}: CertificationProps) => {
  return (
    <div className="bg-card border rounded-xl overflow-hidden flex flex-col md:flex-row card-hover">
      <div className="md:w-1/3 p-6 flex items-center justify-center bg-muted/30">
        <img
          src={badgeUrl}
          alt={`${title} certification badge`}
          className="max-w-40 md:max-w-48 h-auto"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-cloud-blue font-medium mb-4">{issuer}</p>
        
        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Issued:</span> {issueDate}
          </div>
          {expiryDate && (
            <div>
              <span className="text-muted-foreground">Expires:</span> {expiryDate}
            </div>
          )}
          <div className="col-span-2">
            <span className="text-muted-foreground">Credential ID:</span> {credentialId}
          </div>
        </div>
        
        <p className="mb-4 text-muted-foreground">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <a href={verificationUrl} target="_blank" rel="noopener noreferrer">
            Verify Credential
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CertificationCard;
