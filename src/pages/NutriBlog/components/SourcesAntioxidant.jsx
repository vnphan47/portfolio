/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IconArrow } from '../../../assets/icons/IconArrow';
import classNames from 'classnames';

const SourcesAntioxidant = () => {
    const [visible, setVisible] = useState(false);
    const _handleVisible = () => {
        setVisible((prev) => !prev);
    };
    return (
        <div className="pt-3">
            <div
                className={classNames(
                    'flex items-center gap-2 font-bold transition-all cursor-pointer text-xl',
                    `[&>svg]:rotate-${visible ? 0 : 180}`
                )}
                onClick={_handleVisible}
            >
                Sources <IconArrow active={visible} />
            </div>
            {visible ? (
                <ol className="pl-5 list-decimal">
                    <li>
                        Verival. What you should know about berries. Verival.
                        https://www.verival.at/english/blog/berries/. Accessed May 12, 2024.
                    </li>
                    <li>
                        Cleveland Clinic. Inflammation: What You Need To Know. Cleveland Clinic.
                        https://my.clevelandclinic.org/health/symptoms/21660-inflammation. Accessed April 23, 2024.
                    </li>
                    <li>
                        Sharifi-Rad M, Anil Kumar NV, Zucca P, et al. Lifestyle, oxidative stress, and antioxidants:
                        back and forth in the pathophysiology of chronic diseases. Front Physiol. 2020;11:694.
                        doi:10.3389/fphys.2020.00694
                    </li>
                    <li>
                        Lobo V, Patil A, Phatak A, Chandra N. Free radicals, antioxidants and functional foods: impact
                        on human health. Pharmacogn Rev. 2010;4(8):118-126. doi:10.4103/0973-7847.70902
                    </li>
                    <li>
                        Cleveland Clinic. What Is Oxidative Stress? Cleveland Clinic.
                        https://my.clevelandclinic.org/health/articles/oxidative-stress. Accessed May 12, 2024.
                    </li>
                    <li>
                        Knapp S. Oxidative Stress - The Definitive Guide. Biology Dictionary. Published October 11,
                        2020. https://biologydictionary.net/oxidative-stress/. Accessed May 12, 2024.
                    </li>
                    <li>
                        Medline Plus. Antioxidants. Medline Plus. https://medlineplus.gov/antioxidants.html. Accessed
                        April 16, 2024.
                    </li>
                    <li>
                        National Institutes of Health. Office of Dietary Supplements - Vitamin C. National Institutes of
                        Health. https://ods.od.nih.gov/factsheets/VitaminC-Consumer/. Accessed May 13, 2024.
                    </li>
                    <li>
                        Fullscript. Vitamin C Health Benefits and Best Sources. Fullscript. Published November 27, 2023.
                        https://fullscript.com/blog/vitamin-c-guide. Accessed May 13, 2024.
                    </li>
                    <li>
                        Kendall M. Discover Vitamin E Rich Foods and Nutritious Recipes. Optimising Nutrition. Published
                        September 21, 2023. https://optimisingnutrition.com/vitamin-e-rich-foods/. Accessed May 13,
                        2024.
                    </li>
                    <li>
                        Johnson EJ. The role of carotenoids in human health. Nutr Clin Care Off Publ Tufts Univ.
                        2002;5(2):56-65. doi:10.1046/j.1523-5408.2002.00004.x
                    </li>
                    <li>
                        Academy of Nutrition and Dietetics. Antioxidants: Protecting Healthy Cells. Academy of Nutrition
                        and Dietetics.
                        https://www.eatright.org/health/essential-nutrients/vitamins/antioxidants-protecting-healthy-cells.
                        Accessed May 13, 2024.
                    </li>
                    <li>
                        Fullscript. Better Brain Health with Carotenoids. Fullscript.
                        https://fullscript.com/blog/carotenoids-for-brain-health. Accessed May 13, 2024.
                    </li>
                    <li>
                        Rajaram S, Jones J, Lee GJ. Plant-based dietary patterns, plant foods, and age-related cognitive
                        decline. Adv Nutr Bethesda Md. 2019;10(Suppl_4):S422-S436. doi:10.1093/advances/nmz081
                    </li>
                    <li>
                        Abdel-Salam OME, Youness ER, Mohammed NA, Morsy SMY, Omara EA, Sleem AA. Citric acid effects on
                        brain and liver oxidative stress in lipopolysaccharide-treated mice. J Med Food.
                        2014;17(5):588-598. doi:10.1089/jmf.2013.0065
                    </li>
                    <li>
                        Eggersdorfer M, Wyss A. Carotenoids in human nutrition and health. Arch Biochem Biophys.
                        2018;652:18-26. doi:10.1016/j.abb.2018.06.001
                    </li>
                    <li>
                        Soundararajan P, Kim JS. Anti-carcinogenic glucosinolates in cruciferous vegetables and their
                        antagonistic effects on prevention of cancers. Molecules. 2018;23(11):2983.
                        doi:10.3390/molecules23112983
                    </li>
                    <li>
                        O&apos;Connor EA, Evans CV, Ivlev I, et al. Vitamin and mineral supplements for the primary
                        prevention of cardiovascular disease and cancer: updated evidence report and systematic review
                        for the US Preventive Services Task Force. JAMA. 2022;327(23):2334-2347.
                        doi:10.1001/jama.2021.15650
                    </li>
                    <li>
                        US Preventive Services Task Force, Mangione CM, Barry MJ, et al. Vitamin, Mineral, and
                        Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer. US Preventive
                        Services Task Force Recommendation Statement. JAMA. 2022;327(23):2326.
                        doi:10.1001/jama.2022.8970
                    </li>
                    <li>
                        U.S. Department of Agriculture, U.S. Department of Health and Human Services. Dietary Guidelines
                        for Americans, 2020-2025. 9th ed. Washington, DC: U.S. Department of Agriculture, U.S.
                        Department of Health and Human Services; 2020
                    </li>
                </ol>
            ) : null}
        </div>
    );
};

export default SourcesAntioxidant;
