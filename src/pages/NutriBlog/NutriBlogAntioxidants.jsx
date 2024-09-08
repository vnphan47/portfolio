import TitleBlog from './components/TitleBlog';
import { getImage } from '../../utils/image';
import ItemTypeAntioxidant from './components/ItemTypeAntioxidant';
import ListFood from './components/ListFood';
import SourcesAntioxidant from './components/SourcesAntioxidant';

const NutriBlogAntioxidants = () => {
    const titleClassName = 'mb-3 text-2xl font-bold font-fair';
    return (
        <div className="container__box px__mobile">
            <TitleBlog title="Antioxidants in Actions: Battling Inflammation" date="May 14, 2024" />
            <p className="mt-10 font-bold">Welcome to the World of Antioxidants and Inflammation!</p>
            <p className="mb-10">
                There are amazing discoveries waiting for you to explore, especially if you&apos;re unaware of how a
                morning cup of blueberries can protect you from chronic inflammatory disease! It&apos;s going to be an
                action-packed journey you won&apos;t want to miss!
            </p>

            <img className="object-cover w-full aspect-video" src={getImage('Antioxidants.png')} alt="" />
            <p className="mt-2 text-sm italic font-light text-black text-opacity-50">
                Image by pikisuperstar on Freepik
            </p>
            <p className="my-5 ">So first, let&apos;s start with...</p>
            <div className="">
                <h3 className={titleClassName}>What is Inflammation?</h3>
                <div>
                    Inflammation is a natural response of the human immune system to illness, injury, or invaders
                    entering the body (e.g. viruses). Imagine you cut yourself when chopping onion. At first, you will
                    notice the redness and swelling around the cut. These are the symptoms when inflammation kicks in.
                    Your body will signal the immune system about the injury, sending out the inflammatory cells to trap
                    the toxins and start the healing process.
                    <br />
                    <br />
                    There are two major classes of inflammation: acute and chronic.
                    <ul className="pl-5 list-disc">
                        <li>
                            <span className="font-bold">Acute inflammation</span> is a short-term response to injuries
                            or illness.
                            <ul className="pl-5 list-disc">
                                <li>Cuts and bruises</li>
                                <li>Fever</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold">Chronic inflammation</span> is a long-term response, resulting
                            from unresolved acute inflammation and tissue damage. This condition can last for weeks,
                            months, or even years. Chronic inflammation is associated with several health issues,
                            including:
                            <ul className="pl-5 list-disc">
                                <li>Cardiovascular diseases</li>
                                <li>Diabetes</li>
                                <li>Arthritis</li>
                                <li>Cancer</li>
                                <li>Mental health-related diseases (e.g. depression, anxiety)</li>
                                <li>
                                    Neurodegenerative diseases (e.g. Alzheimer&apos;s disease, Parkinson&apos;s
                                    disease).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-14 ">
                <h3 className={titleClassName}>What are Antioxidants?</h3>
                <p className="py-3">
                    To understand the function of antioxidants,
                    <span className="pl-1 font-bold">
                        we need to understand what free radicals and oxidative stress are.
                    </span>
                </p>

                <div className="py-3">
                    <h4 className="text-[#639033] font-bold text-xl">Free Radicals</h4>
                    <p>
                        <span className="font-bold">Free radicals</span> are harmful molecules that our bodies produce
                        as &quot;waste&quot; from natural metabolism, such as breathing and digesting foods. These
                        molecules are unstable, missing electrons from their outer shells or &quot;shields&quot;.
                        Therefore, they start attacking our body cells to steal electrons from them to become more
                        stable and protective. Signaling the attack, our bodies naturally produce{' '}
                        <span className="font-bold">antioxidants</span> to neutralize the free radicals and calm the
                        chaos.
                    </p>
                    <img className="mx-auto" src={getImage('Antioxidants, Free Radicals 1.png')} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 mb-12 md:grid-cols-2 ">
                <div>
                    <h4 className="text-[#639033] font-bold text-xl">Oxidative Stress</h4>
                    <p>
                        Exposures to environmental factors including sunlight, radiation, tobacco smoke, polluted air,
                        and chemicals can also create free radicals. When there are more free radicals than antioxidants
                        in our bodies, it causes oxidative stress. Over time, this damages the body&apos;s cells and
                        tissues and leads to several chronic inflammations such as cancer, heart disease, and
                        neurological disease (e.g. Alzheimer&apos;s disease, Parkinson&apos;s disease).
                        <br />
                        <br />
                        So, how to reduce oxidative stress or free radicals and prevent ourselves from chronic
                        inflammation? The answer is to{' '}
                        <span className="font-bold">increase the amount of antioxidants through diet!</span>
                    </p>
                </div>
                <img className="w-full" src={getImage('Antioxidants, Free Radicals-02 1.png')} alt="" />
            </div>

            <div className="py-5 ">
                <h3 className={titleClassName}>Type of Antioxidants</h3>
                <p>
                    There are many different types of antioxidants commonly found in our diets,{' '}
                    <span className="font-bold">especially fruits and vegetables</span>. Each plays a vital role in
                    providing health benefits to help the body work effectively and support the immune system. Here are
                    some common types of antioxidants:
                </p>
            </div>
            <ItemTypeAntioxidant
                title="Vitamin C"
                description="Vitamin C is a water-soluble vitamin naturally found in foods. This vitamin provides several
                            benefits to our health, including protecting the body from free radicals, producing collagen
                            and protein to heal wounds, supporting the immune system, and improving iron absorption."
                titleList="These foods are great sources of vitamin C:"
                list={[
                    'Citrus fruits (grapefruits, oranges, kiwi)',
                    'Berries (strawberries, blueberries)',
                    'Broccoli',
                    'Potatoes'
                ]}
                imgSrc="image 4.png"
                imgBy="Fullscript"
            />

            <ItemTypeAntioxidant
                title="Vitamin E"
                description="Vitamin E is a fat-soluble vitamin naturally found in foods, especially in healthy fats. This vitamin helps improve the immune system and makes the blood vessels bigger to prevent blood clotting. "
                titleList="Some foods that are rich in vitamin E include:"
                list={[
                    'Vegetable oils (sunflower, safflower)',
                    'Nuts (peanuts, almonds, hazelnuts)',
                    'Green vegetables (spinach, lettuce)',
                    'Other foods with added vitamin E (cereals, juices, spreads)'
                ]}
                imgSrc="image 3.png"
                imgBy="Optimising Nutrition"
            />

            <ItemTypeAntioxidant
                title="Carotenoids"
                description="Carotenoids are plant pigments that contribute to bright red, orange, and yellow hues.
                            Researchers found that carotenoids and their subtypes (beta-carotene, lutein, lycopene, and
                            zeaxanthin) may reduce the risk factors of diseases, especially cancer and eye disease."
                titleList="Foods rich in carotenoids include:"
                list={['Sweet potatoes', 'Carrots', 'Tomatoes', 'Spinach', 'Brussels sprouts']}
                imgSrc="image 5.png"
                imgBy="Fullscript"
            />

            <div className="py-5 ">
                <h3 className={titleClassName}>Antioxidants in Food</h3>
                <p className="mb-5">
                    Try incorporating the following antioxidant-rich foods into your diet to combat oxidative stress!
                </p>
                <ListFood />
            </div>

            <div className="py-5 ">
                <h3 className={titleClassName}>Antioxidants: Diet vs. Supplements</h3>
                <p>
                    So, does the intake of antioxidants, or any other nutrients, through diet and supplements have the
                    same effect?
                    <br />
                    <span className="font-bold">The answer is no.</span>
                    <br />
                    <br />
                    Dietary intake of antioxidants is the best way to have beneficial effects on health in the long
                    term. Moreover, consuming high-dose antioxidant supplements can harm our health. A 1994 study found
                    that male smokers supplemented with vitamin E and beta-carotene had an 18% higher chance of lung
                    cancer.
                    <br />
                    <br />
                    There&apos;s more! In a 2022 review involving 84 studies and more than 700,000 participants,
                    scientists found that vitamin and mineral supplements have no effect in preventing cancer, heart
                    disease, and even death. More surprisingly, beta-carotene supplements actually increased the lung
                    cancer risk by 20%.
                    <br />
                    <br />
                    With numerous evidence-based studies, by 2022, the U.S. Preventive Services Task Force recommended
                    people not use beta-carotene or vitamin E supplements to prevent cancer and cardiovascular disease.
                </p>
            </div>

            <div className="py-5 ">
                <h3 className={titleClassName}>What You Can Do</h3>
                <p>
                    Consuming the right amount of antioxidants helps fight oxidative stress and reduce chronic
                    inflammatory diseases such as cardiovascular diseases, diabetes, arthritis, cancer, mental
                    health-related diseases, and neurodegenerative diseases. The 2020-2025 American Dietary Guideline
                    recommends adults to eat at least 2 servings of fruits and at least 3 servings of vegetables daily.
                    <br />
                    <br />
                    Remember, it is important to obtain antioxidants via foods rather than supplements. If you have any
                    questions or concerns about inflammation or antioxidant supplements, you should consult a doctor or
                    healthcare provider for appropriate support.
                </p>
            </div>

            <SourcesAntioxidant />
        </div>
    );
};

export default NutriBlogAntioxidants;
