const projects = [
  {
    title: "Tipalti — Contractor Payments Integration",
    description: "Integrated Tipalti as the single source to automate contractor/vendor payments, onboarding, and tax-document collection. Built secure OAuth-based connections and webhook listeners to sync payment status and reconciliations with internal systems.",
    techStack: ["ServiceNow", "OAuth 2.0", "Webhooks", "REST API", "Finance Automation"],
    link: "#"
  },
  {
    title: "Salesforce → ServiceNow Integration (REST API)",
    description: "Developed a robust, secure REST integration between Salesforce and ServiceNow for synchronized incident and change creation. Handled token-based authentication, retry logic, payload validation, and failure recovery. Reduced manual effort by 80%.",
    techStack: ["ServiceNow", "Salesforce", "REST API", "Scripted REST APIs", "ECC Queue"],
    link: "#"
  },
  {
    title: "Azure → ServiceNow Integration (Webhook + OAuth)",
    description: "Implemented an inbound integration where Azure pipelines send change/event payloads into ServiceNow. Secured using OAuth profiles and ACLs. Built a custom parser to map JSON to Change Requests with retry mechanisms.",
    techStack: ["ServiceNow", "Azure DevOps", "Webhooks", "OAuth", "JSON Parsing"],
    link: "#"
  },
  {
    title: "Jira → ServiceNow Incident & Change Sync",
    description: "Implemented a two-way integration with Jira using REST and MID Server. Mapped fields and statuses between systems to maintain data consistency. Built reconciliation logic to avoid duplicates and a monitoring log to track failures.",
    techStack: ["ServiceNow", "Jira", "REST API", "MID Server", "Integration"],
    link: "#"
  },
  {
    title: "AWS CloudWatch Alerts → ServiceNow Auto-Incident",
    description: "Built an automation pipeline where AWS CloudWatch pushes alerts to ServiceNow via webhooks. Parsed events into Incidents with deduplication logic to avoid alert storms. Implemented skill-based auto-assignment.",
    techStack: ["ServiceNow", "AWS CloudWatch", "Event Management", "Business Rules", "Automation"],
    link: "#"
  },
  {
    title: "Scoped Application for Test Device Management",
    description: "Designed a full-fledged custom scoped app for tracking test devices. Integrated with CMDB for device attributes and logs. Developed Service Portal items for requests and automated ownership transfers.",
    techStack: ["ServiceNow", "Scoped App", "CMDB", "Service Portal", "Flow Designer"],
    link: "#"
  },
  {
    title: "Service Catalog Modernization & Portal Redesign",
    description: "Created highly optimized catalog items using Client Scripts and UI Policies. Reduced load time by refactoring backend scripts. Designed custom widgets for Service Portal using HTML, AngularJS, and ServiceNow APIs.",
    techStack: ["ServiceNow", "AngularJS", "HTML/CSS", "Service Portal", "Client Scripts"],
    link: "#"
  },
  {
    title: "Major Incident Automation Workflow",
    description: "Developed logic to automatically detect major incident criteria. Triggered workflows for bridge creation and stakeholder updates. Integrated with MS Teams/Slack for alerting and built executive dashboards.",
    techStack: ["ServiceNow", "Major Incident Management", "MS Teams Integration", "Workflow", "Dashboards"],
    link: "#"
  },
  {
    title: "CMDB Enhancement & Discovery Optimization",
    description: "Improved CMDB data accuracy by writing rules for relationship mapping. Integrated Discovery with custom scripts for classification. Built fix scripts to clean stale CIs and configured impact calculations.",
    techStack: ["ServiceNow", "CMDB", "Discovery", "Fix Scripts", "CI Class Manager"],
    link: "#"
  },
  {
    title: "ITSM Implementation & Process Automation",
    description: "Built and enhanced core ITSM modules (Incident, Change, Problem). Developed end-to-end workflows and automation using Flow Designer and Scripted APIs. Optimized process efficiency and improved SLA adherence.",
    techStack: ["ServiceNow", "ITSM", "Flow Designer", "GlideAjax", "Business Rules"],
    link: "#"
  }
];

export default projects;