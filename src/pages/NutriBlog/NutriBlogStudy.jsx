import { getImage } from '../../utils/image';
import TitleBlog from './components/TitleBlog';

const NutriBlogStudy = () => {
    return (
        <div className="container__box">
            <TitleBlog title="Why I Chose to Study Nutrition" date="February 14, 2024" />

            <div className="aspect-video bg-[#FCF2F2] flex items-center justify-center mt-10">
                <img className="object-contain h-4/5" src={getImage('Asset 4 1.png')} alt="" />
            </div>
            <div className="pt-12 mb-8 px__mobile">
                <h3 className="text-2xl font-semibold mb-9 font-fair">
                    My journey to nutrition was led by personal experiences with eating disorders during high school.
                </h3>
                <img className="mx-auto mb-4 md:float-right" src={getImage('Layer 1.png')} alt="" />
                <p>
                    I did not have enough access to any professional assistance, both physically and mentally. Although
                    I understood that each individual&apos;s body has a different metabolism and mechanism, general
                    knowledge and unreliable information found on the internet did not help me improve my matter. Not
                    until years later did I have a chance to take nutrition courses that I learned how to overcome my
                    eating disorders and develop good relationships with food. Motivated by my transformation, I aspire
                    to specialize in nutrition and food to assist individuals facing similar challenges.
                </p>
            </div>
            <p className="px__mobile">
                Initially, my understanding of nutrition was limited to weight and physical appearance management.
                Nevertheless, delving into nutrition courses has provided me with a novel vision and mindset. I realized
                how magical nutrition study is. The true meaning of eating is not only to fulfill our satiety but also
                to obtain nutrients, serving as vital components in cellular function, disease prevention, and overall
                well-being. However, even though nutrition study is well-known, it is still a very young field of
                science and public health that needs to be recognized more and investigated more in-depth. Individuals
                need to gain proper awareness of their bodies and the significance of nutrients in overall well-being.
                <br />
                <br />
                I read a book, written by a Chinese doctor, talking about the lost of nutrition study. The author has
                spent nearly 20 years researching and reflecting on medicine and nutrition, along with practice, to
                provide valuable knowledge and accurate solutions to protect health and prevent diseases. Utilizing
                traditional Oriental medicine beliefs, he demonstrated the significance of nutrition and its correlation
                with health. Despite its wonderful capability, nutrition study remains underestimated in modern medicine
                as well as the scarcity of professionals with in-depth knowledge in the field.
                <br />
                <br />
                Therefore, I am eager to become one of the first leaders bringing nutrition knowledge out there and
                leaving a huge impact on modern public health, assisting individuals in prioritizing their health
                through proper nutrition and eating habits.
            </p>
        </div>
    );
};

export default NutriBlogStudy;
