import Head from "next/head";
import TermsAccordion from "@/components/Terms/TermsAccordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const termsData = [
  {
    sectionNumber: 1,
    title: "General Terms of Use",
    content: `1.1. Eligibility:
Users must provide accurate and complete information during registration.

1.2. Registration:
Both designers and clients must create their own accounts using an active email.
Users are prohibited from creating multiple accounts without prior permission from the website's management.

1.3. Restrictions:
The website must not be used for illegal or unethical purposes.
Users are prohibited from copying or reusing designs without the creator's consent.
Harassment, verbal abuse, or inappropriate comments between users are strictly forbidden.`,
  },
  {
    sectionNumber: 2,
    title: "Client System (Project Owners)",
    content: `2.1. Launching a Contest:
Clients can launch a contest for a specific design by providing a detailed design brief.
The client must set a budget and contest duration, including the prize for the winner.
An administrative fee will be charged.
The client must clearly specify their requirements and provide feedback throughout the contest.

2.2. Evaluating Designs:
Clients can review all submitted designs and choose the best one.
If the client is not satisfied with any of the designs submitted, they can extend the contest duration or cancel it in accordance with the website's policy.

2.3. Prizes and Payments:
The prize must be secured before the second round starts to ensure it is awarded to the winner after the contest ends.
Prizes are paid out to the winners once the client selects and receives the final design.
The website commission is deducted from the amount before announcing the prize.

2.4. Intellectual Property Rights:
Once the prize is awarded, all intellectual property rights for the winning design are transferred to the client.
The client is responsible for legally using the design and cannot resell or distribute it without the designer's consent if it is not the winning design.

2.5. Contest Cancellation:
The client has the right to cancel the contest before starting second round, according to the website's refund policy.
If no winner is chosen, the 77S design may retain the Contest proceeds as Site Maintenance Expenses.`,
  },
  {
    sectionNumber: 3,
    title: "Designer System",
    content: `3.1. Submitting Designs:
Designers must submit 100% original designs and ensure they do not infringe on the intellectual property rights of any third party.
Designers must adhere to the client's guidelines and work on improving the design based on the feedback provided during the contest.

3.2. Prizes and Payments:
The winning designer receives the prize after the client receives and revision the final design.
Payments are transferred to the designer's account after deducting the website's commission.
Designers are responsible for providing correct payment details and handling financial matters.

3.3. Designer Rights:
Designers retain full rights to designs that were not selected as winning entries.
Designers are allowed to showcase non-winning designs in their portfolios once the contest ends.

3.4. Violations:
If a designer submits a stolen or copied design, the client or website may file a complaint, and the designer involved may be banned from using the platform.

3.5. Design Removal:
If a contest is withdrawn by the client or canceled without selecting a winner, the designer is not entitled to claim the prize.`,
  },
  {
    sectionNumber: 4,
    title: "1-to-1 Project System",
    content: `4.1. Launching a Project:
Clients and designers can work directly in a One-on-One project without the need for a contest.
Both parties must agree on the project details, including budget and deadlines for deliverables.

4.2. Payment System:
Payment must be secured by the client before the project begins and held in escrow until the project is completed.
Payments are distributed based on progress milestones, allowing for partial payments as project objectives are met.

4.3. Revisions and Delivery:
The client has the right to request specific revisions to the submitted designs throughout the project.
Upon final approval of the work, the payment is transferred to the designer.

4.4. Intellectual Property Rights:
Intellectual property rights are transferred to the client once the project is completed and the full payment is made.
Designers retain the right to use any previous work that was not purchased as part of the project.`,
  },
  {
    sectionNumber: 5,
    title: "Payment and Commission Policy",
    content: `5.1. Payment System:
Clients must secure the prize or payment before the contest or project starts, and the funds are held by the website until the work is completed.

5.2. Commission:
The website retains a certain commission from the prize or payments, which is deducted before the funds are transferred to the designer.

5.3. Refund Policy:
Refunds are only issued to clients under specific circumstances, such as contest cancellation without a winner, in accordance with the website's refund policy.`,
  },
  {
    sectionNumber: 6,
    title: "Dispute Resolution Policy",
    content: `6.1. Mediation System:
In the event of a dispute between the client and designer, both parties can submit a formal complaint to the website.
A specialized team will review the complaint, examine the provided evidence, and make a neutral decision.

6.2. Penalties:
If one of the parties is found to be in violation of the terms, their account may be banned or other penalties may be applied, depending on the severity of the violation.`,
  },
  {
    sectionNumber: 7,
    title: "Privacy Policy",
    content: `7.1. Data Collection:
Personal information is collected upon registration and use of the website, including email addresses, names, and payment details.

7.2. Data Usage:
Collected data is used for managing accounts, providing technical support, and improving the user experience on the platform.

7.3. Data Sharing:
Personal information will not be shared with third parties without the user's consent, except as required by law.`,
  },
  {
    sectionNumber: 8,
    title: "Termination and Account Ban Policy",
    content: `8.1. Grounds for Termination:
The website reserves the right to terminate or ban the account of any user found violating the terms, infringing intellectual property rights, or engaging in unethical behavior.

8.2. Consequences:
In the event of account termination, all remaining funds are frozen, and no fees or prior payments are refunded.`,
  },
];

export default function TermsEnPage() {
  return (
    <>
      <div className="bg-[#F5F7FA] pb-12 pt-14">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-2xl lg:text-4xl text-[#FF5F6B] font-medium pt-6 pb-2">
          For help and consultant please contact
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-left sm:text-2xl lg:text-4xl font-bold text-[#545457] my-6">
          Terms and Policies for 77S design
        </h1>

        {termsData.map((term) => (
          <TermsAccordion
            key={term.sectionNumber}
            sectionNumber={term.sectionNumber}
            title={term.title}
            content={term.content}
            className="rounded-3xl border-none mb-4"
          />
        ))}

        <p className="text-[#4747C7] text-lg mt-6 mb-8 max-w-7xl mx-auto text-left">
          This comprehensive policy and terms document ensures the professional
          organization of the platform, protecting both designers and clients,
          while also outlining the processes for contest management, projects,
          and milestones.
        </p>
      </div>
    </>
  );
}
