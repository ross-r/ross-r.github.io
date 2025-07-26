<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="resume">
    <div class="print-hidden px-8 pb-4">

      <UAlert
        color="primary"
        variant="subtle"
        description="You can save this resume by printing this page in supported browsers."
      />

    </div>

    <div class="ring ring-default rounded px-8 pt-8 md:p-12 max-w-4xl mx-auto select-text">
      <div class="flex flex-col md:flex-row gap-8 md:gap-12">
        <section id="sidebar" class="w-full md:w-[30%] flex flex-col gap-8">
          <div>
            <h2 class="text-3xl font-bold pb-2">
              Ross Rhodes
            </h2>

            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2"><Icon icon="mdi:email" width="24" height="24" /><a href="mailto:ross@heyimross.com" class="link link-hover">ross@heyimross.com</a></li>
              <li class="flex items-center gap-2"><Icon icon="mdi:linkedin" width="24" height="24" /><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="link link-hover">LinkedIn</a></li>
              <li class="flex items-center gap-2"><Icon icon="mdi:github" width="24" height="24" /><a href="https://github.com/ross-r" target="_blank" rel="noopener noreferrer" class="link link-hover">Github</a></li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold border-b-2 border-base-200 pb-2 mb-4">Skills & Expertise</h2>
            <div class="space-y-4 text-sm">
              <div>
                <h3 class="font-semibold">Languages</h3>
                <p class="opacity-80">C, C++, C#, PowerShell, Python, PHP, SQL, Java (up to JDK 8), JavaScript, TypeScript</p>
              </div>
              <div>
                <h3 class="font-semibold">Frameworks & Tools</h3>
                <p class="opacity-80">Node.js, React, Vue.js, x86/64 Instruction Set, IDA Pro</p>
              </div>
              <div>
                <h3 class="font-semibold">Microsoft 365 Administration</h3>
                <p class="opacity-80">Comprehensive experience with Microsoft 365 administrative portals, Azure AD/Entra ID, Exchange Online, SharePoint Online, Teams Admin Center, and Intune</p>
              </div>
              <div>
                <h3 class="font-semibold">Specialized Skills</h3>
                <p class="opacity-80">Reverse Engineering, Microsoft 365 Identity & User Management, Data Compliance & Governance, Scripting & Automation</p>
              </div>
              <div>
                <h3 class="font-semibold">Methodologies</h3>
                <p class="opacity-80">Agile, Scrum, ITIL</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold border-b-2 border-base-200 pb-2 mb-4">Education</h2>
            <div class="text-sm">
              <h3 class="font-semibold">Bachelors of Information Technology</h3>
              <p class="opacity-80">Royal Melbourne Institute of Technology</p>
              <p class="opacity-60">2019-2022 (withdrawn)</p>
            </div>
          </div>

          <div class="pt-2">
            <p class="text-xs italic">
              References available upon request
            </p>
          </div>
        </section>

        <section id="content" class="w-full md:w-[70%]">
          <div class="mb-8">
            <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 mb-4  space-y-1 space-x-1">Summary</h2>
            <p class="text-normal">
              I am a highly adaptable and self-taught professional with a unique blend of expertise spanning low-level software development and extensive professional experience within a Managed Service Provider.
              <br /><br />
              
              My C++ developer experience required solid foundational knowledge and well-developed core fundamentals, cultivating a deeply analytical and methodical problem-solving approach.
              <br /><br />
              
              Complementing this, I have experience within fast-paced Managed Service Provider environments, delivering IT support to clients in government, federal, state, education sectors among many more.
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl font-bold border-b-2 border-primary pb-2 mb-4">Work Experience</h2>
            <div class="space-y-6">
              
              <div class="">

                <div>
                  <div class="flex justify-between items-baseline">
                    <h3 class="font-bold text-lg">Service Desk Analyst <span class="text-sm font-normal">(Level 2 - Identity)</span></h3>
                    <p class="text-sm opacity-60">Dec 2024 - Present</p>
                  </div>
                  <p class="text-sm opacity-80 italic">Centorrino Technologies | Coburg, VIC, Australia</p>

                  <p class="mt-2 space-y-1 text-sm">
                    As a Service Desk Analyst within Centorrino Technologies, an MSP 501 Winner for 2025 and a leading Managed Service Provider, I provide comprehensive support and proactive management for over 100 diverse clients, delivering outstanding customer experience while managing and resolving complex issues.
                  </p>
                  
                  <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Provided Level 2/3 break-fix support and advanced troubleshooting for complex escalated tickets, focusing on Microsoft 365 mail-flow, user accounts, the Microsoft 365 product stack, VoIP solutions, and more.</li>
                      <li>Managed and prioritised service requests and incidents within an ITSM platform, ensuring strict adherence to Service Level Agreements.</li>
                      <li>Utilised various RMM and RDS software for efficient remote support and system administration.</li>
                      <li>Adhered to ITIL frameworks and formal change management processes, including the use of Change Approval Forms.</li>
                      <li>Managed end-to-end user lifecycle, including on/offboarding across Microsoft 365 environments.</li>
                      <li>Experience with Microsoft 365 services such as Exchange, Defender, Purview, SharePoint, Teams, and Intune.</li>
                      <li>Experience supporting various third-party systems such as Salesforce, Sage HR, Mimecast, Barracuda, Exclaimer, and CodeTwo among others.</li>
                      <li>Administered and configured Microsoft 365 environments, including configuration of MFA, SSPR, PIM, Conditional Access policies and more.</li>
                      <li>Implemented and maintained Privileged Identity Management solutions and contributed to Essential 8 compliance uplifts for clients in state, federal, education sectors and many more.</li>
                      <li>Experience with Microsoft Purview for data governance and compliance, ensuring best practices and secure, compliant operations.</li>
                      <li>Assumed acting team leadership responsibilities during Team Leader absences, including managing escalated workflows and mentoring team members.</li>
                      <li>Collaborated closely with Service Delivery Managers and participated in Major Incident Management processes, ensuring effective communication and timely resolution for critical client issues.</li>
                      <li>Developed and deployed extensive PowerShell scripting to automate identity and user management processes, enhancing operational efficiency and troubleshooting capabilities.</li>
                      <li>Liaised with third-party vendors for support of systems outside of direct access, and managed licensing adjustments and billing.</li>
                      <li>Delivered outstanding customer experience within a leading Managed Service Provider environment, maintaining strict client confidentiality.</li>
                      <li>Actively contributed to the continuous improvement of team documentation, developed and delivered training for new team members, and provided ongoing mentorship to junior staff within the Identity Team.</li>
                      <li>Collaborated closely with the wider Service Desk and various IT teams to provide advanced support, isolate complex issues, and drive customer experience-driven outcomes, enhancing overall service delivery.</li>
                    </ul>
                </div>

                <div class="pb-2 mb-4"></div>

                <div>
                  <div class="flex justify-between items-baseline">
                    <h3 class="font-bold text-lg">Service Desk Analyst <span class="text-sm font-normal">(Level 1)</span></h3>
                    <p class="text-sm opacity-60">Jul 2024 - Dec 2024</p>
                  </div>
                  <p class="text-sm opacity-80 italic">Centorrino Technologies | Coburg, VIC, Australia</p>
                  <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Provided excellent customer service, being the first point of contact for inbound callers.</li>
                    <li>Assisted 30+ inbound callers daily during peak business hours.</li>
                    <li>Working with on-premesis, hybrid, and cloud environments to troubleshoot and resolve tickets in our system.</li>
                    <li>Managed and maintaining KPIs in relation to call time and ticket SLAs.</li> 
                    <li>Active Directory configuration with Users and Groups.</li>
                    <li>Network management and VPN configuration and troubleshooting.</li>
                    <li>Hardware maintenance for Windows Devices, Printers, Mobile and Peripherals.</li>
                    <li>Application support in relation to client specific applications and enterprise applications such as the Adobe and Microsoft Office Suite.</li>
                  </ul>
                </div>
              </div>
              
              <div class="force-new-page">
                <div class="flex justify-between items-baseline">
                  <h3 class="font-bold text-lg">Software Developer</h3>
                  <p class="text-sm opacity-60">Jan 2019 - Mar 2024</p>
                </div>
                <p class="text-sm opacity-80 italic">NEOWEBZ, B.V | Netherlands, Remote</p>
                <div class="mt-2 space-y-1 text-sm">
                  <p>
                    Working with a small team of developers to create software products, building, assisting and managing deployment of software to thousands of clients.
                    <br /><br />
                    Primarily working with C/C++ and often involving assembly and reverse engineering skill-sets.<br />
                    Creation of graphical user interfaces utilizing modern DirectX practices, using the latest technologies available.<br />
                    Working at a low level within the Windows operating system, user-mode & kernel development requiring solid foundations and displaying a great understanding of system architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>