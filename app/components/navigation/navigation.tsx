import NavigationItem from "./navigationItem";


const navigationItems = [{title:"Legionary",link:"/legionary"},{title:"Auxiliary",link:"/auxiliary"},{title:"Camp",link:"/camp"}, {title:"Ranks",link:"/ranks"},{title:"Tactics",link:"/tactics"},{title:"Cavalry",link:"/cavalry"}]

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