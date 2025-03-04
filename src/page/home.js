import React from 'react'
import Header from '../common/header'
import Banner1 from '../assets/images/video.png'
import Mask from '../assets/images/Warranty.svg'
import Mask1 from '../assets/images/Vector.png'
import lifecycle from '../assets/images/CompleteLifecycleManagement.png'
import Dealer from '../assets/images/DealerClaimsManagement.png'
import Dealer1 from '../assets/images/ManufacturerClaimsProcessing.png'
import Dealer2 from '../assets/images/SupplierRecoveryOptimization.png'
import Business from '../assets/images/MinimizeWarrantyDisputes.png'
import Business1 from '../assets/images/AccelerateClaimApprovals.png'
import Business2 from '../assets/images/SeamlessAPIIntegration.png'
import Business3 from '../assets/images/ReduceOperationalComplexity.png'
import Business4 from '../assets/images/OptimizeFinancialRecovery.png'
import Business5 from '../assets/images/EnhanceDealerCollaboration.png'
import Business6 from '../assets/images/ImproveData-DrivenDecisionMaking.png'
import custom from '../assets/images/CustomDevelopment.png'
import custom1 from '../assets/images/End-to-EndSupport.png'
import deliver from '../assets/images/Deliver.png'
import deliver1 from '../assets/images/DeliverMobile.png'
import Footer from '../common/footer'
import CustomAccordion from '../common/accordion'
import Contact from '../common/contact'
function Home() {

    const accordionItems = [
        {
            title: "What is a warranty management platform, and how does it help?   ",
            content:
                "A warranty management platform automates and streamlines the process of handling product warranties, claims, and recoveries. It helps businesses reduce operational costs, improve efficiency, and deliver a seamless experience for both customers and dealers.",
        },
        {
            title: "How does your platform handle warranty claims?",
            content:
                "Our platform simplifies the entire claims process by automating validations, tracking claim statuses in real-time, and ensuring faster resolutions. It’s designed to reduce errors and ensure every claim is processed accurately and efficiently.",
        },
        {
            title: "Can I use the platform to track returns and recoveries?",
            content:
                "Absolutely! The platform supports returns and recovery workflows by providing tools to manage product returns, validate claims, and optimize recovery processes, helping you save time and minimize losses.",
        },
        {
            title: "How does API integration work with the platform?",
            content:
                "API integration ensures seamless connectivity between your existing systems and our platform. It allows data matching for warranty claims, product details, and customer records to ensure accurate and efficient operations.",
        },
        {
            title: "Is the platform scalable for my growing business?",
            content:
                "Yes! Our solution is built to scale with your business. Whether you’re expanding to new markets or managing increasing claims volume, the platform adapts to your needs with ease.",
        },
        {
            title: "How does the platform improve supplier recovery?",
            content:
                "The platform includes a dedicated supplier portal that helps validate parts and labor claims, track recovery processes, and provide clear visibility into supplier reimbursements.",
        },
        {
            title: "What kind of insights can I get from the platform?",
            content:
                "Our platform provides robust analytics and reporting tools to help you identify trends, improve product quality, and make informed decisions about warranty policies and operations.",
        },
        {
            title: "Can the platform help me eliminate fraudulent claims?",
            content:
                "Yes, the platform uses advanced validation checks to detect and prevent fraudulent claims, safeguarding your business from unnecessary financial losses.",
        },
        {
            title: " Does the platform support dealer and customer collaboration?",
            content:
                "Absolutely! The platform bridges the gap between manufacturers, dealers, and customers, ensuring smooth communication and collaboration at every stage of the warranty lifecycle.",
        },
        {
            title: "How quickly can I implement the platform?",
            content:
                "Implementation is fast and hassle-free. Our team works closely with you to ensure the platform integrates seamlessly with your existing systems, so you can start seeing benefits right away.",
        },
    ];

    return (
        <div className='bg-[#002025] bg-headerBackground1 bg-contain bg-no-repeat'>
            <div className='w-large mx-auto'>
                <Header />

            </div>

            <div className='py-12 w-large mx-auto'>
                <h1 className='text-white text-center text-3xl leading-none Brockmann'><span className='text-[#00FFFC]'> All-in-One </span> Warranty <br /> Management Platform</h1>
                <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-0'>
                    <div className='col-span-3'></div>
                    <div className='col-span-6'>
                        <p className='text-white text-center text-xl py-4 Brockmann'>Simplify, Automate, and Transform Your Warranty Operations
                        </p>
                        <p className='text-[#00FFFC] text-center Gilroy'>Revolutionize Warranty Workflows with a Single Platform </p>
                        <p className='text-[#95AAAD] text-center Gilroy text-[15px]'>Connect every part of your warranty ecosystem—manufacturers, distributors, dealers, suppliers, and service providers—to deliver seamless, frustration-free experiences for customers.</p>
                    </div>
                    <div className='col-span-3'></div>
                </div>
                <div className='grid grid-cols-12 gap-4 py-5 px-8'>
                    <div className='col-span-4'>
                        <div className='flex '>
                            <img src={Mask} className='pr-3 self-start' alt="mask" />
                            <p className='text-white Gilroy font-[500]'>Streamline claims, registrations, and <br /> service plans with ease.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='flex '>
                            <img src={Mask} className='pr-3 self-start' alt="mask" />
                            <p className='text-white Gilroy font-[500]'>Automate key processes to eliminate <br /> inefficiencies and reduce operational costs.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='flex '>
                            <img src={Mask} className='pr-3 self-start' alt="mask" />
                            <p className='text-white Gilroy font-[500]'>Support dealer services with a robust, <br /> all-in-one solution built for scalability.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-8 text-center w-large mx-auto'>
                <h1 className='text-white text-2xl Brockmann'>Complete Lifecycle Management</h1>
                <p className='text-[#95AAAD] Gilroy text-base'>Our platform brings together every stage of the warranty process to maximize efficiency and deliver value:</p>
                <div className='relative mt-6'>
                    <img src={lifecycle} className='mx-auto px-16 py-8' alt="mask" />
                    <div className='absolute top-5 left-[40%] '>
                        <p className='text-[#95AAAD] Gilroy text-base'>Simplify product setup <br /> with, registrations, and <br /> service plans</p>
                    </div>
                    <div className='absolute top-[19%] left-[10%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-right'>Foster deeper connections <br /> and enhance trust with <br /> customers and partners.</p>
                    </div>
                    <div className='absolute top-[18%] right-[12%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-left'>Handle warranty claims <br /> with precision and speed,<br /> backed by data-driven <br /> workflows.</p>
                    </div>
                    <div className='absolute top-[44%] left-[0%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-right'>Bring stakeholders together <br /> on one cohesive platform for  <br /> seamless collaboration.</p>
                    </div>
                    <div className='absolute top-[47%] right-[4%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-left'>Ensure seamless return   <br /> processes for improved <br /> customer experiences.</p>
                    </div>
                    <div className='absolute bottom-[13%] right-[10%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-left'>Streamline recovery   <br /> operations to minimize losses <br /> and maximize efficiency.</p>
                    </div>
                    <div className='absolute bottom-[14%] left-[9%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-right'>Optimize operations with   <br /> intelligent, automated <br /> workflows that drive results.</p>
                    </div>
                    <div className='absolute bottom-[-2%] left-[40%] '>
                        <p className='text-[#95AAAD] Gilroy text-base text-left'>Transform raw data into   <br /> actionable insights for <br /> smarter decision-making.</p>
                    </div>
                </div>
            </div>

            <div className='py-8 w-large mx-auto'>
                <h1 className='text-3xl Brockmann text-white text-center'>Comprehensive Warranty <br /> Lifecycle Solutions</h1>
                <p className='text-[#95AAAD] text-lg text-center Gilroy py-6'>Streamlined processes for every stage of the warranty journey, tailored for efficiency and accuracy.</p>
                <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4 py-5 px-8'>
                    <div className='col-span-4 text-white'>
                        <img src={Dealer} alt="mask" />
                        <h1 className='pt-2 Brockmann'>Dealer Claims Management</h1>
                        <p className='py-2 text-[#95AAAD] Gilroy pr-12'>Empower dealers to submit and track
                            claims efficiently with complete transparency and accuracy.</p>
                        <div className='border-l border-[#8BC542] pl-3 Gilroy pr-16'>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' /> Warranty Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Simplify in/out-of-warranty checks for quick resolutions.</p>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' /> Parts and Labor Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Ensure accuracy in service costs and component validation.</p>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' /> Real-Time Claim Status</h1>
                            <p className='text-[#95AAAD]'>Provide full visibility to keep stakeholders informed.</p>
                        </div>
                    </div>
                    <div className='col-span-4 text-white'>
                        <img src={Dealer1} alt="mask" />
                        <h1 className='pt-2 Brockmann'>Manufacturer Claims Processing</h1>
                        <p className='py-2 text-[#95AAAD] Gilroy pr-12'>Enable manufacturers to automate and adjudicate claims faster, improving decision-making and reducing delays.</p>
                        <div className='border-l border-[#8BC542] pl-3 Gilroy pr-16'>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' /> Warranty Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Verify eligibility quickly and accurately.</p>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' />Streamlined Part Returns</h1>
                            <p className='text-[#95AAAD] pb-3'>Simplify tracking and recovery of returned parts.</p>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' />Full Transparency</h1>
                            <p className='text-[#95AAAD]'>Offer clear claim insights and status updates for smoother operations.</p>
                        </div>
                    </div>
                    <div className='col-span-4 text-white'>
                        <img src={Dealer2} alt="mask" />
                        <h1 className='pt-2 Brockmann'>Supplier Recovery Optimization</h1>
                        <p className='py-2 text-[#95AAAD] Gilroy pr-24'>Provide suppliers with a dedicated portal to manage cost recovery efficiently and effectively.</p>
                        <div className='border-l border-[#8BC542] pl-3 Gilroy pr-16'>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' /> Cost Recovery Tracking</h1>
                            <p className='text-[#95AAAD] pb-3'>Streamline processes for supplier reimbursement.</p>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' /> Parts and Labor Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Confirm valid claims for accurate recovery.</p>
                            <h1 className='flex'><img src={Mask} alt="mask" className='pr-2' />Claim Visibility</h1>
                            <p className='text-[#95AAAD]'>Maintain transparency across the claim lifecycle.</p>
                        </div>
                    </div>
                </div>
                <p className='text-center text-[#95AAAD] py-4 Gilroy'>Unlock efficiency and accuracy at every stage of the warranty lifecycle with tailored solutions for dealers, manufacturers, and suppliers.</p>
            </div>

            <div className='py-8 w-large mx-auto'>
                <h1 className='text-[#95AAAD] Brockmann text-3xl text-center'>Business Benefits Of <span className='text-[#00FFFC]'> CodeWarranty </span></h1>
                <p className='text-[#95AAAD] text-center Gilroy py-6'>Transforming warranty management through automation, analytics, and seamless integration.</p>
                <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 text-white px-8'>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Minimize Warranty Disputes</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Leverage advanced claim validation processes to reduce conflicts and ensure smoother warranty claim handling.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2' /> Detect and prevent invalid claims automatically.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-center' /> Build trust with accurate and fair claim management across all stakeholders.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business1} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Accelerate Claim Approvals</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Cut down processing times with real-time claim tracking and automated workflows.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2' /> Speed up warranty claims through precise validation.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Enhance customer satisfaction with faster service resolutions.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business2} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Seamless API Integration</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Integrate with existing CRM, ERP, and dealer management systems for a unified warranty management ecosystem.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2 self-start' /> Synchronize customer, product, and claim data seamlessly across platforms.</h1>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2' /> Eliminate redundant data entry and improve operational efficiency.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-start' /> Enable real-time updates and consistent information across all connected systems.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business3} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Reduce Operational Complexity</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Simplify the management of dealers, servicers, and customers with centralized operations.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2' /> Consolidate warranty data across all stakeholders in one platform.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' />Use bulk uploads and automation to reduce administrative workload.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business4} alt="mask" className='py-4' />
                            <h1 className='Brockmann text-xl'>Optimize Financial Recovery</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Maximize supplier recovery rates with precise claim validation and real-time tracking.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2' /> Monitor cost recoveries and reimbursement processes.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Prevent financial losses with rigorous validation protocols.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business5} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Enhance Dealer Collaboration</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Strengthen partnerships with tools tailored for dealer management.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2' /> Provide custom price books and clear visibility into claims and contracts.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Foster smooth communication to build trust and long-term partnerships.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business6} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Improve Data-Driven Decision Making</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Access powerful analytics and reporting tools to make smarter business decisions.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} alt="mask" className='pr-2 self-start' /> Analyze trends in claims, sales, and operations to identify opportunities for improvement.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Use actionable insights to optimize warranty policies and product quality.</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className='py-8 w-large mx-auto'>
                <h1 className='text-3xl Brockmann text-[#00FFFC] text-center mb-8'>Frequently Asked Questions</h1>
                <div className='px-16'>
                    <CustomAccordion items={accordionItems} />
                </div>
            </div>

            <div className='py-8'>
                <h1 className='text-3xl Brockmann text-white text-center'>We Deliver Across Diverse <br /> Verticals and Industries</h1>
                <p className='text-[#00FFFC] text-lg text-center Gilroy py-4'>Custom Solutions Built to Meet Your Business Needs</p>
                <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy '>At CodeWarranty, we pride ourselves on creating innovative warranty management solutions tailored to a wide array of industries. Our flexible platform and expertise empower businesses to achieve efficiency,
                    scalability, and customer satisfaction, no matter the vertical.</p>
                <div className='relative'>
                    <img src={deliver} className='mt-12 mx-auto lg:block md:hidden sm:hidden' alt="mask" />
                    <img src={deliver1} className='mt-12 mx-auto lg:hidden md:block sm:block' alt="mask" />
                    <div className='absolute opacity-0'>
                        <p>
                            Industries We
                            Serve
                        </p>
                        <div>
                            <h1>Furniture Insurance</h1>
                            <p>Provide reliable warranty and recovery solutions for furniture retailers.</p>
                        </div>
                        <div>
                            <h1>Appliances</h1>
                            <p>Automate warranty registration and claims for home appliances.</p>
                        </div>
                        <div>
                            <h1>Electric Vehicles</h1>
                            <p>Enhance warranty services for next-gen automotive solutions.</p>
                        </div>
                        <div>
                            <h1>Logistics and Insurance</h1>
                            <p>Improve operational efficiency with streamlined claim management.</p>
                        </div>
                        <div>
                            <h1>Agriculture Equipment</h1>
                            <p>Simplify warranty processes for machinery and tools.</p>
                        </div>
                        <div>
                            <h1>Consumer Electronics</h1>
                            <p>Seamlessly manage warranties for gadgets and electronic devices.</p>
                        </div>
                        <div>
                            <h1>Consumer Durables</h1>
                            <p>Optimize warranty handling for long-term goods like appliances and equipment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-8 w-large mx-auto'>
                <h1 className='text-3xl Brockmann text-white text-center'>Custom Solutions Tailored for You</h1>
                <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy '>We understand that every business is unique. That’s why we offer:</p>
                <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 text-white px-12 py-8'>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={custom} className='py-4' alt="mask" />
                            <h1 className='Brockmann text-xl'>Custom Development</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Tailor-made applications to suit your specific needs.</p>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={custom1} className='py-4 ' alt="mask" />
                            <h1 className='Brockmann text-xl'>End-to-End Support</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>We've got you covered from onboarding to ongoing maintenance.</p>

                        </div>
                    </div>
                </div>

                <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy '>Partner with us to experience solutions that adapt to your industry and business goals.</p>
            </div>

            <div className='py-8 w-large mx-auto'>
                <div className='flex bg-[#04292B] justify-center text-white p-12 mx-8'>
                    <div className='w-[50%]'>
                        <h1 className='Gilroy text-3xl text-[#95AAAD]'><span className='text-white'> Let us know </span>  if you'd <br /> like further refinements!</h1>
                    </div>
                    <p className='self-center Gilroy text-[#95AAAD] w-1/2 text-right'>
                        <button className="bg-[#8BC542] Gilroy uppercase py-4 px-6 rounded-md text-white font-medium">Know More</button></p>
                </div>
            </div>

            <div className='py-8 w-large mx-auto'>
                <h1 className='text-[#95AAAD] Brockmann text-3xl text-center'>Explore the  <span className='text-[#00FFFC]'> Capabilities </span></h1>
                <p className='text-[#95AAAD] text-center Gilroy py-6'>Discover the key features to automate the warranty management process</p>


                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 px-8'>
                    <div className='col-span-1 lg:order-none md:order-2 sm:order-2 text-white'>
                        <h1 className='Brockmann text-xl'>Multiple Claim Types</h1>
                        <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>The platform supports different types of claims such as:</p>
                        <h1 className='flex Gilroy '> <img src={Mask} alt="mask" className='pr-2 self-start' />Warranty Claims</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Handle requests for repair or replacement under valid warranty terms.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Bulk Claims</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Allows multiple claims to be uploaded and processed simultaneously.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-start' /> Custom Claims Management</h1>
                        <p className='text-[#95AAAD] Gilroy'>Tailors claim processes based on product categories or dealer requirements.</p>
                        <p className='text-white Gilroy pt-5'>Impact</p>
                        <div className='border-l border-white pl-4 mt-3'>
                            <p className='text-[#95AAAD] Gilroy py-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures flexibility to manage claims across a variety of products and use cases.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Bulk uploads improve efficiency for high-volume operations.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Provides transparency to dealers and customers about the claim status.</p>
                        </div>
                    </div>

                    <div className='lg:order-none md:order-1 sm:order-1 flex'>
                        <img src={Banner1} className='px-6 self-center' alt="mask" />
                    </div>
                    <div className='lg:order-none md:order-3 sm:order-3 flex'>
                        <img src={Banner1} className='px-6 self-center' alt="mask" />
                    </div>
                    <div className='col-span-1 text-white lg:order-none md:order-4 sm:order-4 mt-3'>
                        <h1 className='Brockmann text-xl'>Advanced Pricing Features</h1>
                        <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>The system supports managing dealer-specific price books with different pricing models, including:</p>
                        <h1 className='flex Gilroy '> <img src={Mask} alt="mask" className='pr-2 self-start' />Regular Pricing</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Fixed pricing for standard sales.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' />Flat Pricing</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Uniform pricing for specific categories or ranges.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-start' /> Quantity-Based Pricing</h1>
                        <p className='text-[#95AAAD] Gilroy'>Discounted rates for bulk purchases.</p>
                        <p className='text-white Gilroy pt-5'>Impact</p>
                        <div className='border-l border-white pl-4 mt-3'>
                            <p className='text-[#95AAAD] Gilroy py-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Simplifies the creation of price books tailored to individual dealers or markets.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Reduces manual errors with automated uploads and edits.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Drives sales through strategic pricing for large orders.</p>
                        </div>
                    </div>
                    <div className='col-span-1 text-white lg:order-none md:order-6 sm:order-6 mt-3'>
                        <h1 className='Brockmann text-xl'>Real-Time Claim Tracking</h1>
                        <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>Track claims at every stage of their lifecycle with features like:</p>
                        <h1 className='flex Gilroy '> <img src={Mask} alt="mask" className='pr-2 self-start' />Status Updates</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Clear visibility into claim processing.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Approval Workflows</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Automated steps for claim validation and approvals.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-start' />Filters and Searches</h1>
                        <p className='text-[#95AAAD] Gilroy'>Quickly locate claims by type, status, or dealer.</p>
                        <p className='text-white Gilroy pt-5'>Impact</p>
                        <div className='border-l border-white pl-4 mt-3'>
                            <p className='text-[#95AAAD] Gilroy py-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Improves communication between manufacturers, dealers, and customers.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Reduces delays by automating approval processes.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures accurate record-keeping and faster resolutions.</p>
                        </div>
                    </div>
                    <div className='lg:order-none md:order-5 sm:order-5 flex'>
                        <img src={Banner1} className='px-6 self-center' alt="mask" />
                    </div>
                    <div className='lg:order-none md:order-7 sm:order-7 flex'>
                        <img src={Banner1} className='px-6 self-center' alt="mask" />
                    </div>
                    <div className='col-span-1 text-white lg:order-none md:order-8 sm:order-8 mt-3'>
                        <h1 className='Brockmann text-xl'>Dealer Management Tools</h1>
                        <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'> Facilitate efficient dealer operations with features like:</p>
                        <h1 className='flex Gilroy '> <img src={Mask} alt="mask" className='pr-2 self-start' />Dealer Approval Workflows</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Quickly onboard or update dealer accounts.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' />Order Management</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Manage dealer-specific orders, contracts, and claims in one place.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-start' /> Performance Insights</h1>
                        <p className='text-[#95AAAD] Gilroy'>View dealer activity and performance metrics.</p>
                        <p className='text-white Gilroy pt-5'>Impact</p>
                        <div className='border-l border-white pl-4 mt-3'>
                            <p className='text-[#95AAAD] Gilroy py-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Enhances collaboration with dealers through streamlined operations.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Provides a centralized view of dealer activities for better decision-making.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures transparency in claims and contract handling.</p>
                        </div>
                    </div>
                    <div className='col-span-1 lg:order-none md:order-10 sm:order-10 text-white mt-3'>
                        <h1 className='Brockmann text-xl'>Reporting and Insights</h1>
                        <p className='text-[#95AAAD] text-lg Gilroy py-4 pr-8'>Generate comprehensive reports to analyze performance across warranty operations:</p>
                        <h1 className='flex Gilroy '> <img src={Mask} alt="mask" className='pr-2 self-start' />Claims Reporting</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>View claims by type, dealer, or product category.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2' /> Sales Reports</h1>
                        <p className='text-[#95AAAD] Gilroy pb-3'>Track order volumes and revenue trends.</p>
                        <h1 className='flex Gilroy'> <img src={Mask} alt="mask" className='pr-2 self-start' />Custom Dashboards</h1>
                        <p className='text-[#95AAAD] Gilroy'>Tailored visualizations to monitor KPIs.</p>
                        <p className='text-white Gilroy pt-5'>Impact</p>
                        <div className='border-l border-white pl-4 mt-3'>
                            <p className='text-[#95AAAD] Gilroy py-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Supports data-driven decisions with actionable insights.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Identifies bottlenecks and areas for improvement.</p>
                            <p className='text-[#95AAAD] Gilroy pb-3 flex'><img src={Mask1} alt="mask" className='pr-2 self-center' /> Ensures better alignment of warranty operations with business goals.</p>
                        </div>
                    </div>
                    <div className='lg:order-none md:order-9 sm:order-9 flex'>
                        <img src={Banner1} className='px-6 self-center' alt="mask" />
                    </div>

                </div>
            </div>
            <div className='py-8 w-large mx-auto'>
                <Contact />
            </div>

            <div className='w-large mx-auto'>
                <div className='lg:flex md:block sm:block bg-[#04292B] justify-center text-white p-12 mx-8'>
                    <div className='lg:w-[50%] md:w-full sm:w-full'>
                        <h1 className='Gilroy text-3xl text-[#95AAAD] lg:text-left md:text-center sm:text-center'>Your <span className='text-white'> warranty <br /> transformation begins now. </span> <br />  Let us simplify, automate, and <br /> elevate your operations.</h1>
                    </div>
                    <p className='self-center Gilroy text-[#95AAAD] lg:w-[50%] md:w-full sm:w-full lg:text-right lg:pt-0 md:pt-5 sm:pt-5 md:text-center sm:text-center'>Let us know if you'd like any further adjustments!</p>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Home
