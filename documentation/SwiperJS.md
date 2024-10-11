
```npm i swiper```
## Adding Carousel
```
import { Swiper, SwiperSlide } from 'swiper/react';
<Swiper
    spaceBetween={10}
        breakpoints={{ 800: {slidesPerView: 2 }
    }}>
    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}> 
        Div1 Div2 Div3
    </>
</>
```
## Adding Pagination
* In ```Swiper``` i add
```
modules={[Pagination]}
    pagination={{
        clickable: true,
        el: '.custom-pagination',
}}
```