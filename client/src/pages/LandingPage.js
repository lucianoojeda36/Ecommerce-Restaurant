import React, { useEffect } from 'react'
import AppBar from '../components/appBar/AppBar'
import Catalog from '../pages/catalog/Catalog'
import Banner from '../components/banner/BannerImage';
import Footer from '../components/footer/Footer';
import { WishListProducts } from '../components/relatedProducts/WishListProducts';
import { DiscountProducts } from '../components/relatedProducts/DiscountProducts';
import Newsletter from '../components/newsletter/Newsletter';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscountProducts } from '../store/product/product.actions';
import { getUserWishList } from '../store/user/user.action';

export const LandingPage = (props) => {

    const dispatch = useDispatch()
    const discountProducts = useSelector(state => state.productReducer?.discountProducts)
    const wishList = useSelector(state => state.userReducer?.wishList)
    const userId = useSelector(state => state.userReducer.userId.id)

    useEffect(() => {
        dispatch(getDiscountProducts())
        if (userId) dispatch(getUserWishList(userId))

    }, [dispatch])

    if ( discountProducts[0] &&  wishList[0]) {
        return (
            <div>
                <AppBar />
                <Banner />
                <Catalog />
                <DiscountProducts />
                <WishListProducts />
                <Newsletter />
                <Footer />
            </div>)
    }
    else if ( !wishList[0] && !discountProducts[0]) {
        return (
            <div>
                <AppBar />
                <Banner />
                <Catalog />
                <Newsletter />
                <Footer />
            </div>)
    } else if ( !wishList[0]  && discountProducts[0])
        {
        return (
            <div>
                <AppBar />
                <Banner />
                <Catalog />
                <DiscountProducts />
                <Newsletter />
                <Footer />
            </div>
        )
    }
    else {
        return (
            <div>
                <AppBar />
                <Banner />
                <Catalog />
                <WishListProducts />
                <Newsletter />
                <Footer />
            </div>
        )
    }

}