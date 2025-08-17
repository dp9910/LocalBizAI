Of course. This is an excellent way to operationalize the insights from the slide deck and provide immediate, tangible value to a potential customer.

Here is the markdown document containing the business assessment questionnaire and the specific, detailed prompt for the Gemini LLM.

***

# LocalBizAI - Business Growth Assessment

Thank you for your interest in LocalBizAI. To help us understand your business and identify the best opportunities for growth, please answer the following questions. Your responses will be used to generate a personalized AI-powered assessment.

---

### **Part 1: About Your Business**

*   **What is your business type?** (e.g., Restaurant, Cafe, Retail Store, Salon, Auto Shop)
    *   *Answer:*
*   **Where is your business located?** (City, Country)
    *   *Answer:*

---

### **Part 2: Understanding Your Challenges**

*Please answer based on your current business operations.*

**1. How would you describe your current website and online presence?**
    *   (a) We don't have a website.
    *   (b) It's outdated and doesn't work well on mobile.
    *   (c) It's okay, but it's missing key features like online ordering, booking, or a chatbot.
    *   (d) We have a modern website that works well.

**2. How do you and your staff currently handle customer inquiries (phone calls, emails, social media messages)?**
    *   (a) It's a major challenge; we often miss calls and messages during busy hours.
    *   (b) We handle them, but it takes a lot of time away from our main work.
    *   (c) We have a good system in place, but it could be faster.

**3. Which of these repetitive tasks consumes the most time for you or your team each week? (You can choose more than one)**
    *   [ ] Creating social media posts and marketing materials (flyers, ads).
    *   [ ] Updating our menu, service list, or online product catalog.
    *   [ ] Answering the same customer questions over and over (e.g., "What are your hours?", "Where are you located?").
    *   [ ] Managing appointments or reservations.

**4. What has been your biggest frustration with technology or AI tools so far?**
    *   (a) The cost and number of different subscriptions.
    *   (b) The complexity and time required to learn and set them up.
    *   (c) The results were generic and didn't feel authentic to our brand.
    *   (d) We haven't tried using any AI tools yet.

---

### **Part 3: Gemini LLM Prompt for LocalBizAI Assessment**

*(**Instructions for use:** Copy the prompt below and paste it into the Gemini LLM, followed by the user's answers from Parts 1 & 2.)*

**Prompt:**

You are a senior business consultant for **LocalBizAI**, a company that provides "Done-For-You" AI solutions for local businesses. Your tone is expert, empathetic, and professional.

You have been given the following information from a potential client:
- **Business Type:** `[Insert Business Type from Part 1]`
- **Location:** `[Insert Location from Part 1]`
- **Website Status:** `[Insert Answer from Q1]`
- **Customer Inquiries:** `[Insert Answer from Q2]`
- **Time-Consuming Tasks:** `[Insert Answer(s) from Q3]`
- **Tech Frustration:** `[Insert Answer from Q4]`

Based **only** on this information and the context of the LocalBizAI slide deck, generate a concise, personalized business assessment.

**Your assessment must follow this exact structure:**

**1. Assessment Summary:**
    *   Start with a brief, personalized opening acknowledging the client's business type and location.
    *   Based on their answers, identify their **Top 2 Pain Points**. Use bold for the pain point titles.

**2. Your Custom AI Roadmap:**
    *   For each of the two pain points identified, create a section detailing the solution.
    *   Use the 4-Step LocalBizAI Process (**Listen, Strategize, Build, Partner**) as sub-bullets to explain exactly how you will solve their problem.
    *   Reference specific solutions from the slide deck (e.g., "Smart Website Redesign," "24/7 AI Chat & Voice," "Automated Social Media," "AI-Powered Marketing").

**Formatting and Constraints:**
*   Be highly accurate and directly reference the user's stated problems.
*   Your entire response must be concise, use minimal text, and rely heavily on **bullet points**.
*   Do not invent solutions not mentioned in the LocalBizAI slide deck.
*   Maintain a confident, reassuring tone that emphasizes the "Done-For-You" nature of the service.

**Example of a single roadmap item:**

*   **Pain Point: Missed Customer Inquiries & Wasted Time**
    *   **Listen:** We'd start by mapping out the most common questions your customers ask, based on your experience.
    *   **Strategize:** Our platform would then design a custom "24/7 AI Chat & Voice" solution to handle these specific inquiries automatically.
    *   **Build:** Our team would handle the complete technical setup, integrating the AI onto your website and phone line. You do nothing.
    *   **Partner:** After launch, we monitor its performance to ensure it's saving you time and capturing more leads, making adjustments as needed.