import ItemFood from './ItemFood';

const ListFood = () => {
    const listItem = [
        {
            id: 1,
            imgSrc: 'Berries icon.png',
            title: 'Berries',
            description:
                "Strawberries, blueberries, raspberries, and blackberries. A 2019 review found a diet rich in berries might increase cognitive well-being (e.g. Alzheimer's disease) by suppressing inflammation."
        },
        {
            id: 2,
            imgSrc: 'Citrus icon 1.png',
            title: 'Citrus fruits',
            description:
                'Oranges, grapefruits, lemons, and limes. A study in 2014 discovered the effect of citric acid, found in citrus fruits, might be beneficial in inducing oxidative stress in the brain and liver.'
        },
        {
            id: 3,
            imgSrc: 'lettuce(1)-01 1.png',
            title: 'Leafy greens',
            description:
                'Spinach, kale, and collard greens are rich sources of lutein and carotenoids, which can decrease the risk of diseases caused by oxidative stress.'
        },
        {
            id: 4,
            imgSrc: 'Broccoli icon 1.png',
            title: 'Cruciferous vegetables',
            description:
                'Broccoli, cauliflowers, Brussels sprouts, and cabbage. A review found the benefits of cruciferous vegetables in cancer prevention.'
        }
    ];
    return (
        <div className="flex flex-col gap-5">
            {listItem.map((item) => (
                <ItemFood key={item.id} {...item} />
            ))}
        </div>
    );
};

export default ListFood;
