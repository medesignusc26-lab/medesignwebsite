export interface ProjectData {
  id: string;
  name: string;
  year: string;
  leader: string;
  description: string;
  teamImage?: string;
  teamMembers?: string[];
  bestDesign?: boolean;
  onHold?: boolean;
}

export const projectsData: ProjectData[] = [
  // 2023-2024 Projects
  {
    id: 'motor-memory',
    name: 'Motor Memory',
    year: '2023-2024',
    leader: 'Karen Chu',
    description: `Dementia is the loss of cognitive functioning — the loss of thinking, remembering, and reasoning. About one-third of all people age 85 or older may have some form of dementia. Encouraging independence in dementia patients is essential for better quality of life, instilling a sense of worth, and places less stress on caregivers. Driving is independence. However, driving with dementia may be unsafe for the patient and for the general public depending on the patient's cognitive function. 

Physicians rely on caregiver testimonials on driving capabilities of the patient and don't have any other metric on determining the ability of the patient to drive safely. Our group is finding a way to measure driving safety in early-stage dementia patients with a driver license in order to assist physicians gauge a patient's driving capabilities.

Updates (1/1/24): We have concluded our research on the topic and will begin forming a solution.`,
    teamMembers: ['Mustafa Munshi', 'Eric Almendral', 'Vidur Mushran', 'Anisha Sheth', 'Svara Shah'],
  },
  {
    id: 'ada-prosthetics',
    name: 'ADA Prosthetics',
    year: '2023-2024',
    leader: 'Patrick Nowlen Sr.',
    description: `We are designing an adjustable lower-limb prosthetic for pediatric patients. Our project aims to decrease the overall cost of a prosthetic by lowering the frequency of visits to the prosthetist for adjustments. Our prototype will ideally be compatible with industry standard connectors and attachments and can be easily adjusted by the user themselves.

Updates (1/1/24): We have created the fine adjustment module using a bike clamp mechanism. Our next steps will be implementing a crutch mechanism and adding a pyramid adapter to the bottom.`,
    teamMembers: ['Fin Prakittiphoom', 'James Kok', 'Emily Lai', 'Sam Doane', 'Tej Desai'],
  },
  {
    id: 'pulse-sc',
    name: 'PulseSC',
    year: '2023-2024',
    leader: 'Katherine Sweetland',
    description: `Pulse oximetry, while ubiquitous, is not infallible. There is a well documented issue tying pulse oximetry accuracy with skin tone, and since a drop in pulse oximetry informs life or death clinical decisions, it is pertinent to solve it. 

In the coming semester, we will investigate different numbers and types of wavelengths, as well as the use of individual typology angle, and see if we can mitigate these issues without an exorbitant cost.

Updates (1/1/24): We've conducted a technical interview, clinical interview, informal clinical interview, extensive literature review, and we're currently ordering parts.`,
    teamMembers: ['Greg Rosenkranz', 'Caroline Jiang', 'Brenda Santeliz', 'Samhita Surpeddi', 'Jessica Mai'],
  },
  {
    id: 'herscope',
    name: 'HerScope',
    year: '2023-2024',
    leader: 'Ryanna Lui',
    description: `HerSCope aims to optimize the hysteroscopy procedure, which is the process of examining a woman's uterus. This procedure involves a hysteroscope, a device with a narrow rod, and may be conducted when abnormal uterine conditions are present. 

Through clinician interviews, HerSCope has identified navigation along the bended endometrial cavity as a pain point of the hysteroscope user. Thus, our team is redesigning the traditional hysteroscope to grant clinicians increased endometrium visibility while minimizing patient discomfort.

Updates (1/1/24): We've solidified our needs statement and have conducted multiple women's health-related clinician interviews. We have also brainstormed solutions, but need to narrow it down to one to start working on.`,
    teamMembers: ['Arjun Karnwal', 'Eddie Kim', 'Joseph Kim', 'Lindsay Best', 'Shreya Parikh'],
  },
  {
    id: 'happy-feet',
    name: 'Happy Feet',
    year: '2023-2024',
    leader: 'Michael Kim',
    description: `Clubfoot is a congenital foot disorder where the child suffers from crooked feet. This condition can be unilateral and or bilateral preventing the child from engaging in normal physical activity such as walking. The main technique used to address this disorder deemed the Ponseti method involves the surgical cutting of tendons and applying a cast followed by a brace. 

The method according to clinical contacts works very well, however as evidenced by the literature, relapse occurs in patients as a result of the lack of proper adherence to the procedure. Our main focus in our project is to better this adherence by either optimizing casting for better adjustability or improving the communication between clubfoot treaters and their patients leaning towards the physical therapy side.

Updates (1/1/24): Our team has conducted several clinical contact interviews and read through the medical literature to research potential sources of improvement. Furthermore, we are starting to organize a visit to CHLA to observe a Ponseti method procedure.`,
    teamMembers: ['Sarah Hwang', 'Hannah Lee', 'Charles Luo', 'Noelle Lehrman', 'Kaaya Minocha'],
  },
  {
    id: 'sarcopenia',
    name: 'Sarcopenia',
    year: '2023-2024',
    leader: 'Adithi Desham',
    description: `We are tackling the needs area of increasing and monitoring muscle strength in sarcopenic patients through exercise in order to minimize unbalanced gait. Sarcopenia is a disease that affects ~10% of those above the age of 60. It causes a higher mortality rate due to loss of stamina and unbalanced gait. 

Current treatments to this disease are largely lifestyle changes, so our team's goal is to create an exercise equipment to track information about physical performance and improve movements through the capture of information about physiological patterns, physical activity, and mobility.

Updates (1/1/24): Our team is in the research stage right now, and we are trying to find contacts to interview to gain professional insight into our idea.`,
    teamMembers: ['Hannah Lee', 'Audrey Lau', 'Misha Faruki', 'Maria Elena Moscaira'],
  },
  {
    id: 'spine-align',
    name: 'Spine Align',
    year: '2023-2024',
    leader: 'Matthew Layne',
    description: `Back pain is a very prevalent issue among older adults, with somewhere between 36 and 70 percent of this population suffering from back pain. There are a variety of causes for back pain, including issues with the spinal disks and muscular imbalances. In many cases, a variety of causes lead to the pain, making back pain extremely difficult to diagnose and treat. 

This group is specifically focusing on improving the diagnosis and treatment of back pain caused by muscular imbalances.

Updates (1/1/24): We have received input from a variety of clinicians through interviews and have finalized a needs statement.`,
    teamMembers: ['Jonathan You', 'Cindy Nguyen', 'Reeth Kawad', 'Chris Park', 'Angelina Choi', 'Wanfang Qi'],
  },
  // 2020-2021 Projects
  {
    id: 'vaginal-speculum',
    name: 'Redesigning the Vaginal Speculum',
    year: '2020-2021',
    leader: 'Rachel Brockman',
    description: `Our team is focusing on redesigning the vaginal speculum, with the intention of making a product that improves patient comfort during pelvic exams. Speculums are tools used by gynecologists to widen the vaginal opening during pelvic exams and assist doctors in performing exams such as pap smears and cervical cancer screenings. 

Speculums were not designed with patient comfort in mind -- the design originates from the 1840s and was initially tested on slave women, and there have not been substantial updates to the design in the years since. In addition, the materials currently used for speculums cause varying degrees of discomfort for patients during exams. At the moment, speculums are either made of metal or disposable plastic. Among other issues, patients frequently express that metal speculums cause discomfort because they are cold when they enter the vagina, which is an uncomfortable sensation. In addition, many plastic speculums make a loud ratcheting noise when inserted into the vagina, which is off-putting for patients. There are also multiple sizes of speculums in existence, and doctors must qualitatively determine which size to use on an individual patient, which can sometimes lead to discomfort if the chosen speculum is too large.

We intend to create an improved design for the speculum that eliminates these issues. Our speculum would be made of an alternate material and would be adaptable to different sized vaginas through gradual automated expansion, eliminating the qualitative judgment required by doctors. Ideally, this would also improve patient comfort as it would widen the vaginal walls more slowly, making the experience less daunting.`,
    teamMembers: ['Rachel Brockman', 'Kelly Wong', 'Victoria Lawton'],
  },
  {
    id: 'lumbar-puncture',
    name: 'Lumbar Puncture in Neonates',
    year: '2020-2021',
    leader: 'Lindsey Marks',
    description: `Our team is focusing on lumbar puncture in neonates. Neonates are classified as infants that are less than four weeks old and thus highly susceptible to infections. Lumbar puncture is the formal name for a "spinal tap" procedure done to withdraw cerebrospinal fluid for diagnostic purposes (primarily to confirm meningitis in neonates and infants). Currently, the standard of care for lumbar puncture leaves too much room for guesswork and can result in a "traumatic tap" in which blood contaminates the CSF sample or no CSF fluid is withdrawn and the procedure must be repeated in another area. In adults and even older children, a metric for the procedure being done correctly is a "pop" being felt by the practitioner when the needle experiences a change in resistance from a spinal ligament to the cerebrospinal canal. However, in neonates, undeveloped ligaments might result in the absence of a "pop," making the procedure even less guided. As this procedure deals with such a vulnerable population of patients and has the potential to be quite traumatic, we foresee room to improve the accuracy and standardization of the procedure. A possible area of intervention we have come across is in the stabilization of the neonate during the procedure. Yet another could be the mechanical design of the needle to allow for a more accurate puncture trajectory or real-time correction of alignment during the procedure rather than requiring another puncture of the neonate's back. Alternatively, chemical indicators could be used to inform the practitioner of the trajectory of the puncture. 

After performing extensive research and receiving input from healthcare professionals, we have decided to focus on stabilization of the neonate during the procedure through a swaddle-based device. We are currently working on the finer details of the device and writing a provisional patent for our ideas.`,
    teamMembers: ['Amber Helton', 'Vy Ho', 'Lindsey Marks', 'Nick Enriquez', 'Paris Blass'],
  },
  {
    id: 'physical-therapy',
    name: 'Improving Adherence and Efficiency of Physical Therapy',
    year: '2020-2021',
    leader: 'Anokhi Kholwadwala & Nayeli De Leon',
    description: `Our team is focusing on finding a way to improve communication between physical therapists and at-home patients in order to increase adherence and efficacy of targeted physical therapy exercise regimes.

Right now, we are proposing an app-based solution where patients would be able to see visual representations of their PT regimen, communicate with their therapist, and participate in games to encourage compliance. This solution would be beneficial to patients and physical therapists alike, especially due to health concerns from COVID-19 when patients are not able visit the clinic as often as they need to and when they may not be able to afford weekly PT visits.`,
    teamMembers: ['Ao Ma', 'Princess Anita Ilo', 'Tara Hosn', 'Lillian Kann', 'Gabriel Benitez', 'Anokhi Kholwadwala', 'Alicia Tsung', 'Neyeli De Leon'],
  },
  {
    id: 'dementia-diagnosis',
    name: 'ML-based Dementia Diagnosis',
    year: '2020-2021',
    leader: 'John Heo',
    description: `Our team is developing a machine-learning based speech model that would be used to diagnose patients prone to severe cognitive decline. Mild Cognitive Impairment (MCI) serves as an important precursor to the development of Alzheimer's Disease and dementia. To detect MCI at the earliest possible point, recent studies have shown that linguistic markers such as word choice, utterance and sentence structures can serve as preclinical (before noticeable physiological change) behavioral markers. 

Traditional methods of MCI detection have utilized in-vivo biomarkers such as beta amyloid and tau, yet its costly and time-consuming nature prohibits wide usage in an outpatient setting. To address the increasing need for scalable diagnostic screening, our team's long term goal is to deploy the speech model into a mobile application. Here, users will regularly partake in a dialogue with the digital agent, where the embedded speech model tracks the prognosis of neurocognitive decline.`,
    teamMembers: ['John', 'Miru', 'Jethro', 'Bari', 'Keyuri', 'Lucia', 'Karina'],
  },
  {
    id: 'face-mask',
    name: 'Face Mask Redesign for Active Wear',
    year: '2020-2021',
    leader: 'Anthony Chen & Jacob Castro',
    description: `In a novel pandemic, the most important strategy is to prevent the spread of a deadly pathogen between individuals. As a result, we are specifically looking at improving the use of masks while exercising. For, due to the current quarantine, most people have spent their extra time by participating in outdoor physical activities to improve or maintain their physique. Although the mask mandate enforces people to wear conventional and unconventional masks, it is quite common for individuals performing physical activities to remove their mask as they find the conventional masks difficult to breathe through, which results in an increased danger of spreading disease. To address this problem, we are looking at more comfortable ways to design the mask by either tackling the topological problems of the mask and/or the material masks are made of. 

Currently, we are in the research phase of our project. Our interviewing focus is on gym-goers, doctors, epidemiologists and mask designers on their experience of wearing their mask for extended periods of time and the practicality of combating a pandemic whilst wearing masks. Overall, we want to create and patent a mask that gym-goers are willing to use on a daily basis to diminish the spreading of the pandemic. Beyond this, we hope to gain insight into the engineering and design process that comes from solving the world's pressing problems.`,
    teamMembers: ['Anthony', 'Karen', 'Jake', 'Jacob', 'Kirsten', 'Rachel'],
  },
  {
    id: 'foot-posture',
    name: 'Improving Foot Posture',
    year: '2020-2021',
    leader: 'Edgar Sanchez',
    description: `Our team is reinventing the way we look at footwear through the lens of an engineer. We believe that shoes' primary function is to act as a garment to serve the needs of feet. Today shoes provide comfort and protection to feet, but we envision that with engineering principles shoes can be more innovative in addressing health conditions found in feet. 10% of kids are diagnosed to have pigeon toes, a foot condition that causes toes to point inwards. Other common angular foot misalignment conditions include pronation and duck feet. Feet posture is important because it is an underlying factor for health and athletic reasons. When your feet are not properly aligned with the rest of your body the imbalance makes you more prone to accidental slips and falls, which could result in further injury. In addition, incorrect foot posture can cause lower back pain. Nevertheless correct feet alignment is also crucial in high intense sports that places stress on feet, knees, and lower body. For instance, runners with foot posture problems tend to lose shock absorption ability in their feet that is found in a healthy foot posture. A weak foot posture can result in plantar fasciitis, achilles tendonitis and knee injuries. Feet posture is important not only for health and athletics performance, but more so since our feet hold our body weight distribution, correct feet posture is a principle key element to achieve an overall straight body posture.

Orthopigeonics is a design driven team and we are creating a prototype inspired by a back posture trainer to improve feet posture. The back posture trainer is a small square device placed on a user's back and vibrates when the spine is slouched so that the user can straighten their back into a correct posture. We want to apply this similar concept but with feet. As a matter of fact, a team from the 2014 36th Annual International Conference of the IEEE Engineering in Medicine and Biology Society has already tested this technique. They created a smart pressure-sensitive insole that reminds you to walk correctly. The effectiveness of this novel way to correct over pronation posture was evaluated over a two-week period and was proven to work. The use of vibrotactile feedback reduced over pronation by 30% to 50% during the first week. Our team will be creating a similar device, but instead of using an insole pressure sensors, Orthopigeonics will be using sonar technology. This technology will help us determine feet posture and ultimately introduce an orthotic-less treatment to improve feet posture when standing by using a vibrational feedback as a reminder for users to correct their feet posture.`,
    teamMembers: ['Edgar Sanchez', 'Jefferson Veillard', 'Celine Vazquez', 'Rohan', 'Panayot Kalchev'],
  },
  {
    id: 'spasticity',
    name: 'Improving Spasticity Treatment',
    year: '2020-2021',
    leader: 'Andrew Yock',
    description: `Spasticity is the involuntary contraction or tightening of a muscle due to existing neurologic conditions (ex. Cerebral Palsy, Multiple Sclerosis) or trauma (stroke, traumatic brain injury, spinal cord injury). Spasticity can involve part of a muscle, the whole muscle, multiple adjacent muscles. The populations that are most affected by spasticity are those that have experienced any kind of nerve damage that affects sensorimotor skills. Some characteristics of spasticity are contracture — muscles get shorter as a result of being kept tight for an extended period of time — and clonus — uncontrollable rhythmic contractions and relaxations in the muscles that lead to jerking. Currently, we are looking into the way spasticity affects these different populations in terms of their daily physical abilities and general movement functionality in the human body. Additionally, we have examined the different treatments that have historically been implemented to combat spasticity, such as physical and occupational therapy, splinting and casting, electrical stimulation, and surgery.

Based on our research we have found that there is room for improvement regarding the long-term benefits for spasticity treatment in a way that continues to reduce pain while being affordable and ensures compliance from the patient in and out of the clinic. We are currently researching the need area to improve our understanding of the experience of patients, the challenges they face and what treatment options are most successful in improving function to identify possibly directions for innovation. We are also still developing a network of experience through reaching out to clinicians, therapists and researchers who can validate our understanding of the issue and connect us to other resources. Our hope is to gain enough understanding of the gaps in treatment of spasticity be able to start prototyping and benchtop testing in the Spring 2020 semester.`,
    teamMembers: ['Andrew Yock', 'Kristian Vu Bostic', 'Sam', 'Alana McGuinness', 'Patrik Thakur'],
  },
  {
    id: 'needlestick-anxiety',
    name: 'Needlestick Anxiety Remedy',
    year: '2020-2021',
    leader: 'Vivian Li & Christopher Kamadinata',
    description: `Needlestick anxiety is defined as the anxiety and fear people experience when they are receiving injections. A wide range of people of different ages and demographics report that they fear vaccines, allergy tests, blood draws, and any other procedures that involve needles. The worst case of this fear is prevention of individuals from voluntarily getting vaccinated, tested for allergies, or undergoing any needle-related procedures. In the best case, an individual grows to accept needle procedures after understanding the importance of them.

Most common origins of this anxiety are either from discussions with relatives and friends or from the natural intimidation of needles. There are a range of existing methods that exist to alleviate the pain from local skin surface devices to distraction methods. Simpler methods include conversing, averting concentration gaze, or offering an incentive. Our team's goal is to create a more consistent distraction device that improves the experience of pediatric patients from needlestick procedures.`,
    teamMembers: ['Vivian Li', 'Christopher Kamadinata', 'Michelle Arredondo', 'Byron Hatch', 'KayLynn Vroman'],
  },
  // 2019-2020 Projects
  {
    id: 'uroflowmetry',
    name: 'Uroflowmetry',
    year: '2019-2020',
    leader: 'Mike Peterson',
    description: `Uroflowmetry is a test conducted in order to measure the volume of urine excreted and total urination time, which are used in conjunction to determine the flow rate of the urine. That flow rate data is then used by clinicians, such as urologists, to diagnose for various urinary issues. Those problems include, but are not limited to: bladder obstruction, enlarged prostate, bladder incontinence, and urethral/meatal stenosis. For clinicians to determine what type of urinary issue it is, they consider the max urine flow rate and the shape of the urine flow rate graph. For example, a patient with a low max urine flow rate and oddly shaped urine flow rate curve, the clinician might diagnose a patient as having abnormal voiding. Then the clinician will call for more tests, to determine what type of urinary issue the patient may possess.

Where current uroflowmetry devices lack, is the cost, with most ranging from 400-4000 $ USD. We have researched various technologies in order to create a uroflowmetry device at a better price point. The technology that will allow for more competitive pricing while not sacrificing accuracy, is triboelectric devices. Triboelectric devices take advantage of the triboelectric effect, in which materials become electrically charged when in contact with each other. So, we plan on using triboelectric materials to create a triboelectric sensor that will perform uroflowmetry. 
To achieve our development goals, we have: interviewed several researchers with relevant fields and experiences, created a 3-D model of our prototype design, and compiled the needed materials for the prototype. In spring 2020, we plan on creating our prototype and interview more patients with urinary issues, in order to maximize patient compliance with our design.`,
    bestDesign: false,
    teamMembers: ['Agustin Sanchez', 'Michael Peterson', 'Peter Cordi', 'Tony Park', 'Jay Yoo', 'Edwin'],
  },
  {
    id: 'muscle-fatigue',
    name: 'Muscle Fatigue in Nurses',
    year: '2019-2020',
    leader: 'Jake Basilico',
    description: `Nurses have one of the highest lower back injury rates among all professions in the United States. Not only do these lower back injuries end many careers, but they also cost the healthcare industry exorbitant amounts of money.

Based on our research, the main reason behind the unproportional rate of back injury is due to muscle fatigue. Nurses have to repeatedly lift with their lower back in awkward positions. The repetitive motions fatigue the lower back and increase the chance of serious injury. Currently, there is considerable room for improvement with regards to identifying when nurses are the most susceptible to injury. We are currently using EMG and various signal processing techniques to quantify different levels of muscle fatigue. More specifically, we are using a wavelet transform to calculate the instantaneous frequency of the EMG signal. As a muscle becomes more and more fatigued, the EMG frequency spectral distribution shifts; the motor unit firing rate decreases. Ultimately, we hope to give nurses the ability to constantly measure the status of their lower back while alerting them when their muscle fatigue is at a dangerous level. Additionally, by being able to quantify muscle fatigue over time, it will give us the ability to test the effectiveness of therapeutic solutions that aim to prevent or reverse muscle fatigue.`,
    bestDesign: false,
    teamMembers: ['Jake', 'Kaelyn', 'Tristan', 'Molly', 'Arjun'],
  },
  {
    id: 'epipen',
    name: 'Epipen Drug Delivery',
    year: '2019-2020',
    leader: 'Anokhi Kholwadwala',
    description: `Our team focused on improving the design and delivery mechanism of the EpiPen auto-injector, which is used to deliver epinephrine during severe allergic reactions. The project aimed to address key issues with the current EpiPen design, including user anxiety, difficulty of use during emergencies, and the need for more intuitive delivery mechanisms that reduce user error and improve patient outcomes during critical moments.`,
    onHold: true,
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projectsData.find(project => project.id === id);
}

export function getProjectsByYear(year: string): ProjectData[] {
  return projectsData.filter(project => project.year === year);
}