import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useSelector } from "react-redux";
import { Typography } from '@material-ui/core/';
import { useDispatch } from "react-redux";
import axios from "axios"
import { getDiscountProducts } from '../../store/product/product.actions';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];
export const DiscountProducts = () => {
    const dispatch = useDispatch()
    const discountProducts = useSelector(state => state.productReducer?.discountProducts)
    useEffect(() => {
        dispatch(getDiscountProducts())

    }, [dispatch])

    return (
        <>
            <Typography  style={{ textAlign:'center',marginTop:'15px'}} component="p" variant="h4" color="text.primary">
                Productos con Descuento
             </Typography>
          
            <Carousel
                style={{paddingRight:'66px', paddingLeft:'241px'}}
                itemPadding={[50, 10]}
                enableMouseSwipe={true}
                itemsToScroll={2} breakPoints={breakPoints}

            >
                {
                    discountProducts && discountProducts[0] ? (

                        discountProducts.map(p => {
                            return <Item key={p} product={p} />

                        })) : (<h1>no hay productos en promocion </h1>)
                }


            </Carousel>
        
        </>
    )
}
