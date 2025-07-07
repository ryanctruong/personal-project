# pylint: disable-all

import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
from langchain_google_vertexai import VertexAI

load_dotenv()

PROJECT_ID = os.getenv('GOOGLE_CLOUD_PROJECT')

llm = VertexAI(
    model_name="gemini-2.5-pro-preview-05-06",
    project=PROJECT_ID,
    location="us-central1",
)

def build_and_run(job_title: str, job_description_url: str, company_name: str):
    """
    Constructs and runs a CrewAI process for a given job and company,
    then writes the final candidate prep guide to a .txt file.

    Args:
        job_title (str): The position title.
        job_description_url (str): URL of the job description.
        company_name (str): Name of the target company.

    Returns:
        dict: The raw process output and the filename where the guide was saved.
    """
    info_processor = Agent(
        role="Info Processor",
        goal=(
            f"You are an expert information extractor. Fetch the job description from '{job_description_url}', parse the content, and extract structured sections: overview, responsibilities, qualifications, and any highlighted requirements. Return output as JSON with keys: 'overview', 'responsibilities', 'qualifications', 'key_skills'."
        ),
        backstory=(
            "You are a meticulous data extraction specialist with deep expertise in web scraping, text parsing, and NLP-driven summarization."
        ),
        llm=llm,
        verbose=True,
    )

    company_researcher = Agent(
        role="Company Researcher",
        goal=(
            f"Research and summarize {company_name}'s mission, vision, core values, product portfolio, recent strategic initiatives, and latest news. Provide a concise summary in 3–5 bullet points."
        ),
        backstory=(
            "You are a seasoned business analyst skilled in corporate due diligence, market research, and competitive intelligence."
        ),
        llm=llm,
        verbose=True,
    )

    forum_scraper = Agent(
        role="Forum Scraper",
        goal=(
            f"Collect first-hand interview experiences from Glassdoor, Reddit, and Blind for {company_name}. Identify common interview questions, cultural insights, and salary reports. Aggregate findings into a JSON structure organized by category."
        ),
        backstory=(
            "You are an expert in social listening and community mining, adept at scraping and synthesizing peer-sourced insights from public forums."
        ),
        llm=llm,
        verbose=True,
    )

    question_generator = Agent(
        role="Interview Question Generator",
        goal=(
            f"Generate a comprehensive list of 20 targeted interview questions for the {job_title} role at {company_name}, drawing on the job requirements, company profile, and community-derived insights. Organize by category: technical, behavioral, and situational."
        ),
        backstory=(
            "You are a veteran recruitment specialist with expertise in designing effective interview questions that assess both technical competencies and cultural fit."
        ),
        llm=llm,
        verbose=True,
    )

    skill_assessor = Agent(
        role="Skill Assessor",
        goal=(
            f"Design 3–5 practical assessment exercises or scenario-based tasks to evaluate the key technical skills and behavioral competencies required for the {job_title} position at {company_name}. Include clear evaluation criteria."
        ),
        backstory=(
            "You are a skilled talent development professional experienced in creating realistic, role-aligned assessment tasks that simulate on-the-job challenges."
        ),
        llm=llm,
        verbose=True,
    )

    final_compiler = Agent(
        role="Final Compiler",
        goal=(
            f"Integrate all findings into a cohesive Candidate Prep Guide for the {job_title} role at {company_name}. Structure the guide into: Job Overview, Company Insights, Interview Prep (questions & model answers), Assessment Exercises, and Additional Resources."
        ),
        backstory=(
            "You are an editorial lead with a strong background in producing comprehensive, user-friendly candidate guides, ensuring clarity, consistency, and actionable recommendations."
        ),
        llm=llm,
        verbose=True,
    )

    tasks = [
        Task(
            description=(
                f"Fetch job description from {job_description_url} and extract overview, responsibilities, qualifications, and key skills."
            ),
            expected_output="{ 'overview': str, 'responsibilities': list, 'qualifications': list, 'key_skills': list }",
            agent=info_processor,
        ),
        Task(
            description=(
                f"Research {company_name}'s mission, vision, core values, products/services, and recent news; summarize in bullet points."
            ),
            expected_output="company_summary: list",
            agent=company_researcher,
        ),
        Task(
            description=(
                f"Extract interview experiences, common questions, cultural insights, and salary data for {company_name} from public forums."
            ),
            expected_output="forum_insights: dict",
            agent=forum_scraper,
        ),
        Task(
            description=(
                "Generate 20 interview questions organized by technical, behavioral, and situational categories."
            ),
            expected_output="interview_questions: dict",
            agent=question_generator,
        ),
        Task(
            description=(
                "Create 3–5 assessment exercises with evaluation criteria for the role."
            ),
            expected_output="assessment_exercises: list",
            agent=skill_assessor,
        ),
        Task(
            description=(
                "Aggregate all intermediate outputs into a comprehensive candidate prep guide."
            ),
            expected_output="candidate_prep_guide: str",
            agent=final_compiler,
            output_file="results/candidate_prep_guide.txt",
        ),
    ]

    import os
    os.makedirs("results", exist_ok=True)

    crew = Crew(
        agents=[
            info_processor,
            company_researcher,
            forum_scraper,
            question_generator,
            skill_assessor,
            final_compiler,
        ],
        tasks=tasks,
        process=Process.sequential,
        verbose=True,
    )

    result = crew.kickoff()
    print(type(result))
    print(result)
