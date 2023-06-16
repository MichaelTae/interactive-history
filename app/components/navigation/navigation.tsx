import NavigationItem from "./navigationItem";


const navigationItems = [{title:"Legionary",link:"/barracks/legionary"},{title:"Auxiliary",link:"/barracks/auxiliary"},{title:"Camp",link:"/barracks/camp"}, {title:"Ranks",link:"/barracks/ranks"},{title:"Tactics",link:"/barracks/tactics"},{title:"Cavalry",link:"/barracks/cavalry"}]

const Navigation = () => {

    return (
        <div className="flex flex-col lg:flex-row gap-24  justify-center items-center relative top-10">
            {navigationItems.map((item,index) => 
            <NavigationItem key={item.title} title={item.title} link={item.link}/>
            )}


        </div>
    );
};

export default Navigation;