import React from 'react'

function Refund() {
    return (
        <div className='text-platinum bg-russian-violet bg-opacity-95 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-3xl sm:text-4xl font-bold text-lilac mb-8'>Fifer Technologies 90-Day Satisfaction Guarantee</h1>

                <p className='mb-8'>At Fifer Technologies, we are committed to delivering high-quality digital marketing services to our clients. We understand the importance of your satisfaction and have established the following 90-day satisfaction guarantee:</p>

                {[
                    { title: "1. Scope:", items: [
                        "This policy covers all digital marketing services offered by Fifer Technologies, including but not limited to SEO, PPC, social media management, and content marketing."
                    ]},
                    { title: "2. Guarantee Period:", items: [
                        "We offer a 90-day satisfaction guarantee from the service commencement date."
                    ]},
                    { title: "3. Client Communication:", items: [
                        "We commit to maintaining open communication throughout the service period, providing regular updates and performance reports."
                    ]},
                    { title: "4. Performance Metrics:", items: [
                        "Specific, measurable goals will be established at the outset of each project, serving as benchmarks for service quality."
                    ]},
                    { title: "5. Refund Request Process:", items: [
                        "Submit a written request to our dedicated customer success team within the 90-day period.",
                        "Include a detailed explanation of how our services failed to meet expectations or agreed-upon metrics.",
                        "Our team will acknowledge your request within 1 business day."
                    ]},
                    { title: "6. Evaluation Process:", items: [
                        "We'll conduct a thorough review of your account within 5 business days.",
                        "This includes analyzing performance data, communication logs, and adherence to the agreed strategy.",
                        "You'll be invited to a consultation to discuss findings and potential solutions."
                    ]},
                    { title: "7. Resolution Options:", items: [
                        "Service Adjustment: We may propose strategy modifications to address concerns.",
                        "Extended Service: Additional service time may be offered at no extra cost.",
                        "Partial Refund: A pro-rated refund for unsatisfactory service periods.",
                        "Full Refund: Issued if we fundamentally fail to deliver promised services."
                    ]},
                    { title: "8. Refund Specifics:", items: [
                        "Full refunds include all service fees paid.",
                        "Partial refunds are calculated based on the unsatisfactory service duration.",
                        "Non-refundable: Third-party costs (e.g., ad spend, software subscriptions) and initial setup fees."
                    ]},
                    { title: "9. Refund Processing:", items: [
                        "Approved refunds will be issued within 5 business days via the original payment method."
                    ]},
                    { title: "10. Service Continuation:", items: [
                        "Clients can choose to continue services during the review process. Requesting a refund does not automatically terminate the service."
                    ]},
                    { title: "11. Client Responsibilities:", items: [
                        "The guarantee is valid provided the client has:",
                        "Provided timely access to necessary resources and information.",
                        "Implemented agreed-upon recommendations.",
                        "Not violated our terms of service or engagement contract."
                    ]},
                    { title: "12. Dispute Resolution:", items: [
                        "In case of disagreement, we offer a mediation process with a mutually agreed third party."
                    ]},
                    { title: "13. Policy Updates:", items: [
                        "Fifer Technologies reserves the right to modify this policy. Any changes will not apply retroactively to existing contracts."
                    ]}
                ].map((section, index) => (
                    <div key={index} className='mb-8'>
                        <h2 className='text-xl sm:text-2xl font-semibold text-lavender mb-4'>{section.title}</h2>
                        <ul className='list-disc pl-5 space-y-2'>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <p className='mb-4'>This policy aims to balance client satisfaction with fair business practices, demonstrating our commitment to delivering high-quality digital marketing services.</p>

                <p className='mb-4'>If you have any questions or concerns about our 90-day satisfaction guarantee, please don&apos;t hesitate to contact our customer service team at <a href="mailto:info@fifertechnologies.com" className='underline text-white bg-african-violet bg-opacity-50 px-1 rounded-sm'>info@fifertechnologies.com</a>
                </p>

                <p>This policy is subject to change without notice. Please refer to our website or contact us directly for the most up-to-date version of our satisfaction guarantee.</p>
            </div>
        </div>
    )
}

export default Refund