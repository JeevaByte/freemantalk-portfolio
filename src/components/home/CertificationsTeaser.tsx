
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CertificationsTeaser = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Certified Cloud Professional</h2>
            <p className="text-muted-foreground mb-6">
              I'm committed to staying current with the latest cloud technologies through continuous learning 
              and certification. My credentials validate my expertise in designing and implementing secure, 
              high-performance cloud environments.
            </p>
            <Button variant="outline" className="flex items-center" asChild>
              <Link to="/certifications">
                View All Certifications <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover">
              <img 
                src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                alt="AWS Solutions Architect"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">AWS Solutions Architect</h3>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover">
              <img 
                src="https://images.credly.com/images/99289602-861e-4929-8277-773e63a2fa6f/image.png" 
                alt="Terraform Associate"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Terraform Associate</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsTeaser;
