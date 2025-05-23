import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4 text-cloud-darkBlue">Take the Next Step in Your Cloud Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're looking to optimize your cloud infrastructure, implement DevOps best practices, or scale your business with cutting-edge technology, FreemanTalk is here to help. Let's create something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-primary" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" className="btn-outline" asChild>
              <a href="#" download="resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
