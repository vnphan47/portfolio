import { getImage } from '../../utils/image';
import TitleBlog from './components/TitleBlog';

const NutriBlogStudy = () => {
    return (
        <div className="container__box px-[180px] border-t-[1px] border-solid border-t-black pt-10">
            <TitleBlog title="Why I Chose to Study Nutrition" date="February 14, 2024" />
        
            <div className="aspect-video bg-[#FCF2F2] flex items-center justify-center mt-10">
                <img className="object-contain h-4/5" src={getImage('Asset 4 1.png')} alt="" />
            </div>
            <div className="pt-12 mb-8 px__mobile">
                <h3 className="text-2xl font-semibold mb-9 font-fair">
                    My journey to nutrition was led by personal experiences with eating disorders during high school.
                </h3>
                <img className="mx-auto mb-4 md:float-right" src={getImage('Layer 1.png')} alt="" />
                <p className="mb-6">
                    My relationship with food and nutrition continued to shape my journey in unexpected ways. When I was in high school, I battled with eating disorders. As a teenager, I found myself vulnerable to social media's influence and public opinion about body images and self-acceptance. I compared my physical appearance to others. And this causes a complexity in my eating habits. With shallow understanding about diet, I restricted myself from eating, assuming the less I eat the more weight I'd lose. When I allowed myself with "treat days" on weekends, I tend to eat and drink indiscriminately, thinking that I only have these periods to eat what I want. Then, I'd feel bad and try to vomit all the foods that I had consumed. People thought I was successfully losing weight. They admired and asked me for tips. I smiled and said, "I tracked what I eat". But apparently, they did not know what's behind my process; even my parents did not know that I vomited every time after I went to restaurants with them. The consequences of this eating disorders pattern resulted in concerning symptoms: persisted low blood pressure, and yellowish skin, which my mom and I thought that it's because I ate too much sweet potato and its color pigment got expose on my skin.
                </p>
                <p>
                    The turning point came when I fainted during the blood draw for my pre-admission health assessment for UMass Amherst. By the time I saw my mom's panicked face, I knew I was wrong. However, eating disorder is not a condition that can be easily overcome. While I was trying to adjust my eating habits, I learned that it is more than just personal willpower. Not until years later did I have a change to take nutrition courses that I learned how to overcome my eating disorders and develop good relationships with food through scientific understanding rather than misconceptions. Motivated by my transformation, I aspired to specialize in nutrition and health to assist individuals facing similar challenges.
                </p>
            </div>
        </div>
    );
};

export default NutriBlogStudy;
