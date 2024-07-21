/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {icons, images} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import categoryData from '../fakers/CategoriesFaker.json';
import initialCurrentLocation from '../fakers/CurrentLocationFaker.json';
import restaurantData from '../fakers/ResturantsFaker.json';
import priceRatings from '../fakers/PriceRatingFaker.json';
import {HomeHeader, MainCategories, ResturantsList} from '../Components';

const getCategoryData = () => {
  return categoryData.map(category => ({
    ...category,
    icon: icons[category.icon],
  }));
};
const getResturantsData = () => {
  return restaurantData.map(restaurant => ({
    ...restaurant,
    priceRating: priceRatings[restaurant.priceRating],
    photo: images[restaurant.photo],
    courier: {
      ...restaurant.courier,
      avatar: images[restaurant.courier.avatar],
    },
    menu: restaurant.menu.map(menuItem => ({
      ...menuItem,
      photo: images[menuItem.photo],
    })),
  }));
};

const Home = () => {
  const [categories, setCategories] = React.useState(getCategoryData());
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(getResturantsData());
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );
  const onSelectCategory = category => {
    //filter resuturant
    let resturantList = restaurants.filter(r =>
      r.categories.includes(category.id),
    );
    setRestaurants(resturantList);
    setSelectedCategory(category);
  };
  return (
    <SafeAreaView>
      <HomeHeader currentLocation={currentLocation.streetName} />
      <MainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ResturantsList
        categories={categories}
        resturants={restaurants}
        currentLocation={currentLocation}
      />
    </SafeAreaView>
  );
};

export default Home;
