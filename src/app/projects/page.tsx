import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectCardDemo() {
    return (
        <div className="min-h-screen bg-background py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-cyan hover:to-[#29619e] transition-all duration-300 cursor-default">Our Engineering Excellence</h1>
                    <p className="text-muted-foreground text-lg">
                        We build scalable, secure, and high-performance architectures that power complex business operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                        title="Custom Modular POS System (PWA)"
                        description="A Progressive Web App engineered for offline reliability. Features a modular architecture where businesses only enable and pay for the features they actually use."
                        imgSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
                        link="#"
                        linkText="View Case Study"
                    />

                    <ProjectCard
                        title="Supply Chain Optimization Dashboard"
                        description="An enterprise resource planning system with a built-in tax compliance engine. Handles complex multi-warehouse inventory logic, real-time stock forecasting, and automated GST computation."
                        imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        link="#"
                        linkText="Explore Project"
                    />

                    <ProjectCard
                        title="Fintech & Hospitality Solutions"
                        description="Comprehensive financial technology solutions designed for the hospitality industry, featuring secure payment processing and real-time analytics."
                        imgSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                        link="#"
                        linkText="Learn More"
                    />

                    <ProjectCard
                        title="Logistics ERP Platform"
                        description="Enterprise-grade logistics management system with advanced route optimization, real-time tracking, and comprehensive reporting capabilities."
                        imgSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                        link="#"
                        linkText="View Details"
                    />

                    <ProjectCard
                        title="Healthcare Management System"
                        description="HIPAA-compliant healthcare platform with patient management, appointment scheduling, and integrated telemedicine capabilities."
                        imgSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                        link="#"
                        linkText="Discover More"
                    />

                    <ProjectCard
                        title="E-Commerce Platform"
                        description="Scalable e-commerce solution with advanced inventory management, multi-currency support, and AI-powered product recommendations."
                        imgSrc="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2032&auto=format&fit=crop"
                        link="#"
                        linkText="View Project"
                    />
                </div>
            </div>
        </div>
    );
}
