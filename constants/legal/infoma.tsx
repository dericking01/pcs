import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  Globe,
  Lock,
  Mail,
  Smartphone,
} from "lucide-react";
import { A, B, Callout, ContactList, H3, OL, P, UL } from "@/components/legal/legal-prose";
import type { LegalDocContent } from "./types";

const BASE = "/solutions/infoma";

const termsOfService: LegalDocContent = {
  lastUpdated: "July 25, 2026",
  sections: [
    {
      id: "agreement",
      title: "Agreement to terms",
      body: (
        <>
          <P>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement
            between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and{" "}
            <B>Infoma</B> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) concerning your
            access to and use of the Infoma mobile application (the &ldquo;App&rdquo;).
          </P>
          <P>
            By downloading, installing, accessing, or using the App, you agree to be bound by these
            Terms and our <A href={`${BASE}/privacy-policy`}>Privacy Policy</A>. If you do not agree
            with all of these Terms, you are expressly prohibited from using the App and must delete
            it immediately.
          </P>
        </>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility and user accounts",
      body: (
        <UL
          items={[
            <>
              <B>Age requirement:</B> You must be at least 13 years of age (or the age of digital
              consent in your jurisdiction) to use the App. If you are under 18, you must have
              permission from a parent or legal guardian.
            </>,
            <>
              <B>Account security:</B> To access certain features (such as SIM swap protection),
              you must register for an account. You agree to provide accurate, current, and
              complete information during registration.
            </>,
            <>
              <B>Responsibility:</B> You are solely responsible for maintaining the confidentiality
              of your account credentials (email and password) and for all activities that occur
              under your account. You agree to notify us immediately at{" "}
              <A href="mailto:info@pcs.co.tz">info@pcs.co.tz</A> of any unauthorized use of your
              account.
            </>,
          ]}
        />
      ),
    },
    {
      id: "license",
      title: "License to use the App",
      body: (
        <>
          <P>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
            non-transferable, non-sublicensable, and revocable license to download, install, and use
            the App on a mobile device that you own or control, strictly for your personal,
            non-commercial use.
          </P>
          <P>
            You agree <B>not</B> to:
          </P>
          <UL
            items={[
              "Decompile, reverse engineer, disassemble, or attempt to derive the source code of the App.",
              "Modify, adapt, improve, or create derivative works of the App.",
              "Use the App for any illegal, unauthorized, or fraudulent purpose.",
              "Interfere with or disrupt the App's servers, networks, or security features.",
              "Use automated systems (bots, scrapers) to access the App.",
            ]}
          />
        </>
      ),
    },
    {
      id: "security-services",
      title: "Security services and limitations",
      body: (
        <>
          <Callout tone="warning" icon={AlertTriangle} title="Important disclaimer">
            <P>
              While Infoma is designed to enhance your digital security (via URL scanning, SIM swap
              monitoring, and network checks),{" "}
              <B>no security software can guarantee 100% protection against all cyber threats.</B>{" "}
              The App is a tool to assist you, not a substitute for your own vigilance.
            </P>
          </Callout>
          <UL
            items={[
              <>
                <B>Local processing:</B> As detailed in our{" "}
                <A href={`${BASE}/privacy-policy`}>Privacy Policy</A>, clipboard scanning is
                performed locally on your device. We do not guarantee that the App will detect every
                malicious link or phishing attempt.
              </>,
              <>
                <B>Third-party reliance:</B> Security alerts may depend on data provided by
                third-party services or network operators. We are not responsible for the accuracy
                or timeliness of such third-party data.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "payments",
      title: "Subscriptions, payments, and refunds",
      body: (
        <UL
          items={[
            <>
              <B>Premium services:</B> Certain features of the App may require a paid subscription
              or in-app purchase.
            </>,
            <>
              <B>Billing:</B> All payments are processed securely through our third-party payment
              gateway, <B>DPO Group</B>, and are subject to their terms. By providing payment
              information, you authorize us and DPO Group to charge the applicable fees.
            </>,
            <>
              <B>Auto-renewal:</B> Subscriptions may automatically renew at the end of each billing
              cycle unless canceled in accordance with the app store&rsquo;s (Google Play) or DPO
              Group&rsquo;s cancellation policies.
            </>,
            <>
              <B>Refunds:</B> Refund requests are subject to the policies of the platform through
              which you purchased the subscription (e.g., Google Play Store policies). We do not
              provide direct cash refunds.
            </>,
          ]}
        />
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual property rights",
      body: (
        <>
          <P>
            Unless otherwise indicated, the App and its entire contents, features, and functionality
            (including but not limited to all information, software, code, text, displays, images,
            and design) are owned by <B>Infoma</B>, its licensors, or other providers of such
            material and are protected by copyright, trademark, and other intellectual property
            laws.
          </P>
          <P>
            You may not reproduce, distribute, modify, create derivative works of, publicly display,
            or transmit any of the material on our App without our prior written consent.
          </P>
        </>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      body: (
        <P>
          We may terminate or suspend your account and bar access to the App immediately, without
          prior notice or liability, at our sole discretion, for any reason whatsoever, including
          without limitation if you breach these Terms. Upon termination, your right to use the App
          will immediately cease. You may also terminate these Terms at any time by{" "}
          <A href={`${BASE}/account-deletion`}>deleting your account</A>.
        </P>
      ),
    },
    {
      id: "liability",
      title: "Disclaimers and limitation of liability",
      body: (
        <>
          <Callout tone="info">
            <P className="text-white/90">
              The App is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
              without any warranties of any kind, either express or implied. We do not warrant that
              the App will be uninterrupted, error-free, or completely secure.
            </P>
          </Callout>
          <P>
            To the maximum extent permitted by law, in no event shall <B>Infoma</B>, its directors,
            employees, or partners be liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or
            other intangible losses, resulting from:
          </P>
          <UL
            items={[
              "Your access to or use of (or inability to access or use) the App.",
              "Any conduct or content of any third party on the App.",
              "Any unauthorized access, use, or alteration of your transmissions or content.",
              "Your reliance on the security alerts or monitoring services provided by the App.",
            ]}
          />
        </>
      ),
    },
    {
      id: "governing-law",
      title: "Governing law and dispute resolution",
      body: (
        <P>
          These Terms shall be governed and construed in accordance with the laws of{" "}
          <B>the United Republic of Tanzania</B>, without regard to its conflict of law provisions.
          Any dispute arising out of or relating to these Terms or the App shall be resolved
          exclusively in the competent courts of the United Republic of Tanzania.
        </P>
      ),
    },
    {
      id: "changes",
      title: "Changes to terms",
      body: (
        <P>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any
          time. If a revision is material, we will provide at least 30 days&rsquo; notice prior to
          any new terms taking effect. What constitutes a material change will be determined at our
          sole discretion. By continuing to access or use our App after any revisions become
          effective, you agree to be bound by the revised terms.
        </P>
      ),
    },
    {
      id: "contact",
      title: "Contact us",
      body: (
        <>
          <P>If you have any questions about these Terms, please contact us at:</P>
          <ContactList
            items={[
              { icon: Mail, label: "Email", value: <A href="mailto:support@pcs.co.tz">support@pcs.co.tz</A> },
              { icon: Globe, label: "Website", value: <A href="https://pcs.co.tz">pcs.co.tz</A> },
              { icon: Building2, label: "Organization", value: "Pannecia Consulting Services Limited (PCS)" },
            ]}
          />
        </>
      ),
    },
  ],
};

const privacyPolicy: LegalDocContent = {
  lastUpdated: "July 25, 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      body: (
        <>
          <P>
            Welcome to <B>Infoma</B> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We
            are committed to protecting your privacy and ensuring the security of your digital life.
            This Privacy Policy explains in detail how we collect, use, disclose, and safeguard your
            information when you use our mobile application (the &ldquo;App&rdquo;).
          </P>
          <P>
            By downloading, installing, or using the App, you agree to the collection and use of
            information in accordance with this policy. If you do not agree with this policy, please
            do not use our App.
          </P>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      body: (
        <>
          <P>
            To provide our premium security and monitoring services, we collect only the minimum
            data necessary. We categorize this data as follows:
          </P>
          <H3>a) Information you provide</H3>
          <UL
            items={[
              <>
                <B>Account information:</B> When you register, we collect your email address and a
                securely hashed password. You may also optionally provide your phone number to
                enable SIM swap protection features.
              </>,
              <>
                <B>Payment information:</B> If you purchase a premium subscription, payment details
                are processed securely by our third-party payment gateway, <B>DPO Group</B>.{" "}
                <em>
                  We do not store, process, or have access to your credit card, debit card, or
                  mobile money details on our servers.
                </em>
              </>,
            ]}
          />
          <H3>b) Information collected automatically</H3>
          <UL
            items={[
              <>
                <B>Device information:</B> To provide threat detection, we may collect basic device
                telemetry, such as device model, operating system version, and app version.
              </>,
              <>
                <B>Network information:</B> To identify potential Man-in-the-Middle (MITM) attacks or
                unsafe networks, the App may check the name (SSID) of the WiFi network you are
                connected to. <em>We do not intercept or read the content of your network traffic.</em>
              </>,
              <>
                <B>Usage data &amp; analytics:</B> We collect anonymized, aggregated data about how
                you interact with the App (e.g., features used, crash reports) to improve performance
                and security. This data cannot be used to identify you personally.
              </>,
            ]}
          />
          <H3>c) Sensitive permissions (local processing only)</H3>
          <Callout tone="success" icon={Lock} title="Clipboard scanning">
            <P>
              When you copy a link or code, the App may scan it <em>locally on your device</em> to
              check for malicious URLs or phishing attempts.{" "}
              <B>
                This clipboard data is processed entirely on your device and is never uploaded to
                our servers, stored, or shared with third parties.
              </B>
            </P>
          </Callout>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How we use your information",
      body: (
        <>
          <P>We use the collected information strictly for the following purposes:</P>
          <UL
            items={[
              "To create, manage, and secure your user account.",
              "To provide core security features, including URL scanning, threat alerts, and SIM swap monitoring.",
              "To process your subscription payments securely and manage your billing status.",
              "To send you important security alerts, app updates, and (if opted-in) weekly security digests.",
              "To detect, prevent, and address technical issues, fraud, or security breaches.",
              <>
                To comply with applicable legal obligations and enforce our{" "}
                <A href={`${BASE}/terms-of-service`}>Terms of Service</A>.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "how-we-share",
      title: "How we share your information",
      body: (
        <>
          <Callout tone="info">
            <P className="text-white/90">
              We do <B>not</B> sell, trade, or rent your personal data to third parties for
              marketing purposes.
            </P>
          </Callout>
          <P>We only share data in the following limited, necessary circumstances:</P>
          <UL
            items={[
              <>
                <B>Trusted service providers:</B> We share necessary data with vetted third-party
                vendors who assist us in operating the App. These providers are contractually
                obligated to protect your data.
              </>,
              <>
                <B>Legal requirements:</B> We may disclose your information if required to do so by
                law, subpoena, or in response to valid requests by public authorities (e.g., a court
                or government agency).
              </>,
              <>
                <B>Business transfers:</B> In the event of a merger, acquisition, or sale of assets,
                user information may be transferred as part of that transaction, subject to the same
                privacy protections.
              </>,
            ]}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              ["Supabase", "Secure, encrypted database hosting and user authentication."],
              ["DPO Group", "Secure, PCI-DSS compliant payment processing."],
              ["OneSignal", "Delivering push notifications (subject to their privacy policy)."],
              ["Google / Apple", "Secure Sign-In functionality (if you choose to use it)."],
            ].map(([name, purpose]) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm font-semibold text-white">{name}</div>
                <div className="mt-1 text-sm leading-relaxed text-[#93a3c4]">{purpose}</div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "data-security",
      title: "Data security",
      body: (
        <>
          <P>
            We implement industry-standard administrative, technical, and physical security measures
            to protect your personal information, including:
          </P>
          <UL
            items={[
              "End-to-end encryption (TLS/SSL) for all data transmitted between your device and our servers.",
              "Encryption of sensitive data at rest in our databases.",
              "Strict access controls and regular security audits of our infrastructure.",
            ]}
          />
          <P>
            While we strive to use commercially acceptable means to protect your data, please
            remember that no method of transmission over the Internet or electronic storage is 100%
            secure. We cannot guarantee absolute security.
          </P>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "Data retention",
      body: (
        <P>
          We retain your personal information only for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, or as required by law. If you delete your account, we
          will initiate the permanent deletion of your personal data from our active servers within
          30 days, except where we are legally obligated to retain certain records.
        </P>
      ),
    },
    {
      id: "your-rights",
      title: "Your rights and choices",
      body: (
        <>
          <P>
            Depending on your location, you may have specific rights regarding your personal data. We
            respect these rights and provide the following controls:
          </P>
          <UL
            items={[
              <>
                <B>Access and correction:</B> You can view and update your account information
                directly within the App&rsquo;s settings.
              </>,
              <>
                <B>Account deletion:</B> You can request the permanent deletion of your account and
                all associated data at any time by contacting us or using the &ldquo;Delete
                Account&rdquo; feature in the App. See{" "}
                <A href={`${BASE}/account-deletion`}>Account Deletion</A> for details.
              </>,
              <>
                <B>Opt-out:</B> You can disable push notifications, analytics tracking, or location
                services at any time via your device&rsquo;s operating system settings or the
                App&rsquo;s privacy settings.
              </>,
              <>
                <B>Data portability:</B> You may request a copy of the personal data we hold about
                you in a structured, commonly used format.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "international-transfers",
      title: "International data transfers",
      body: (
        <P>
          Your information, including personal data, may be transferred to and maintained on servers
          located outside of your country of residence, where data protection laws may differ. By
          using the App, you consent to this transfer. We will take all steps reasonably necessary
          to ensure that your data is treated securely and in accordance with this Privacy Policy.
        </P>
      ),
    },
    {
      id: "childrens-privacy",
      title: "Children's privacy",
      body: (
        <P>
          Our App is not intended for use by children under the age of 13 (or the applicable age of
          digital consent in your jurisdiction). We do not knowingly collect personally identifiable
          information from children under 13. If we become aware that we have collected such data,
          we will take immediate steps to delete it.
        </P>
      ),
    },
    {
      id: "third-party-links",
      title: "Third-party links and services",
      body: (
        <P>
          The App may contain links to third-party websites or services (e.g., when we flag a
          malicious URL). We are not responsible for the privacy practices or content of these third
          parties. We encourage you to review their privacy policies before providing them with any
          information.
        </P>
      ),
    },
    {
      id: "advertising",
      title: "Advertising and analytics",
      body: (
        <>
          <P>
            We use third-party advertising services, including <B>Google AdMob</B>, to display
            advertisements within the App. These services may collect and use information about your
            device, such as your Advertising Identifier (IDFA), device model, operating system
            version, and approximate location, in order to serve relevant ads and measure ad
            performance.
          </P>
          <P>
            Google AdMob and its partners may also use cookies, device identifiers, or similar
            technologies to collect data for advertising purposes. You can review Google&rsquo;s
            privacy policy at{" "}
            <A href="https://policies.google.com/privacy">policies.google.com/privacy</A>.
          </P>
          <Callout tone="info" icon={Smartphone} title="Your choices">
            <P>
              You can limit ad tracking on your iOS device at any time by going to{" "}
              <B>Settings → Privacy &amp; Security → Tracking</B> and disabling &ldquo;Allow Apps to
              Request to Track.&rdquo; Please note that opting out does not reduce the number of ads
              you will see, but it may make them less relevant to your interests.
            </P>
          </Callout>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to this Privacy Policy",
      body: (
        <P>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, or legal requirements. We will notify you of any significant changes by
          posting the new policy on this page, updating the &ldquo;Last updated&rdquo; date, and/or
          sending you an in-app notification or email. Continued use of the App after such changes
          constitutes your acceptance of the new policy.
        </P>
      ),
    },
    {
      id: "contact",
      title: "Contact us",
      body: (
        <>
          <P>
            If you have any questions, concerns, or requests regarding this Privacy Policy, our data
            practices, or if you wish to exercise your data rights, please contact our Data
            Protection Officer at:
          </P>
          <ContactList
            items={[
              { icon: Mail, label: "Email", value: <A href="mailto:info@pcs.co.tz">info@pcs.co.tz</A> },
              { icon: Globe, label: "Website", value: <A href="https://pcs.co.tz">pcs.co.tz</A> },
              { icon: Building2, label: "Organization", value: "Pannecia Consulting Services" },
            ]}
          />
        </>
      ),
    },
  ],
};

const accountDeletion: LegalDocContent = {
  lastUpdated: "July 25, 2026",
  intro: (
    <P>
      We respect your right to privacy and control over your personal data. If you wish to delete
      your <B>Infoma</B> account (developer: <B>Pannecia Apps</B>) and associated data, please
      follow the instructions below.
    </P>
  ),
  deletionForm: true,
  sections: [
    {
      id: "how-to-request",
      title: "How to request account deletion",
      body: (
        <>
          <Callout tone="success" icon={Smartphone} title="Method 1 — In-app deletion (recommended & fastest)">
            <OL
              items={[
                <>
                  Open the <B>Infoma</B> app on your mobile device.
                </>,
                <>
                  Navigate to <B>Settings</B> (usually found in your Profile menu).
                </>,
                <>
                  Scroll to the bottom and tap on <B>&ldquo;Delete Account&rdquo;</B>.
                </>,
                "Follow the on-screen prompts to confirm your decision. Your account will be scheduled for immediate deletion.",
              ]}
            />
          </Callout>
          <Callout tone="info" icon={Mail} title="Method 2 — Email request">
            <P>If you no longer have access to the app, you can request deletion via email:</P>
            <OL
              items={[
                <>
                  Send an email to{" "}
                  <A href="mailto:info@pcs.co.tz?subject=Account%20Deletion%20Request">
                    info@pcs.co.tz
                  </A>
                  .
                </>,
                <>
                  Use the subject line: <B>&ldquo;Account Deletion Request&rdquo;</B>.
                </>,
                <>
                  Send the email from the <B>exact email address</B> associated with your Infoma
                  account.
                </>,
                "Include your full name and the phone number (if applicable) linked to the account to help us verify your identity.",
              ]}
            />
            <P>
              Our support team will process your request within <B>3 to 5 business days</B> and
              send you a confirmation email once completed.
            </P>
          </Callout>
          <P>
            Alternatively, you can use the{" "}
            <A href="#request-form">deletion request form</A> at the bottom of this page.
          </P>
        </>
      ),
    },
    {
      id: "what-happens",
      title: "What happens to your data",
      body: (
        <>
          <P>Upon confirmation of your deletion request, we take the following actions regarding your data:</P>
          <Callout tone="success" icon={CheckCircle2} title="Deleted within 7 days">
            <UL
              items={[
                "Your account profile (name, email address, phone number).",
                "All authentication tokens and login credentials.",
                "Your personal scan history, monitored accounts, and custom security preferences.",
                "Any active push notification subscriptions linked to your device.",
              ]}
            />
          </Callout>
          <Callout tone="warning" icon={AlertTriangle} title="Retained for legal & compliance reasons">
            <P>
              Certain data must be retained for a limited period to comply with financial
              regulations, fraud prevention, and our{" "}
              <A href={`${BASE}/terms-of-service`}>Terms of Service</A>:
            </P>
            <UL
              items={[
                <>
                  <B>Transaction records:</B> Payment receipts and subscription logs are retained
                  for <B>up to 7 years</B> as required by financial auditing and tax laws. This data
                  is strictly anonymized and cannot be linked back to your personal profile.
                </>,
                <>
                  <B>Anonymized analytics:</B> Aggregated, non-identifiable usage data (e.g.,
                  &ldquo;100 users scanned a URL today&rdquo;) is kept indefinitely to improve app
                  security features.
                </>,
                <>
                  <B>Security logs:</B> Logs related to confirmed malicious activity or fraud may be
                  retained for <B>up to 90 days</B> to protect our systems and other users.
                </>,
              ]}
            />
          </Callout>
        </>
      ),
    },
    {
      id: "reactivation",
      title: "Reactivation and cancellation",
      body: (
        <>
          <P>
            Once your account deletion process is complete, it is{" "}
            <B>permanent and cannot be undone</B>. You will lose access to all premium features and
            historical data. If you wish to use Infoma again in the future, you will need to create a
            brand new account.
          </P>
          <P>
            If you only wish to cancel your paid subscription but keep your free account, please use
            the &ldquo;Cancel Subscription&rdquo; option in the app or contact your payment provider
            (DPO Group) directly, rather than deleting your account.
          </P>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact us",
      body: (
        <>
          <P>
            If you have any questions about this deletion process or need further assistance, please
            contact our Data Protection team:
          </P>
          <ContactList
            items={[
              { icon: Mail, label: "Email", value: <A href="mailto:info@pcs.co.tz">info@pcs.co.tz</A> },
              { icon: Globe, label: "Website", value: <A href="https://pcs.co.tz">pcs.co.tz</A> },
            ]}
          />
        </>
      ),
    },
  ],
};

export const INFOMA_LEGAL: Record<string, LegalDocContent> = {
  "terms-of-service": termsOfService,
  "privacy-policy": privacyPolicy,
  "account-deletion": accountDeletion,
};
