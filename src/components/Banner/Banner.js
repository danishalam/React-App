import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div class="container">
                <div align="center" class="card-productdetail">

                    <div class="wrapper">
                        <div>
                            <div >
                                <img class="img" src="./assets/images/watch.png" />
                            </div>
                        </div>
                        <div class="layout-details" align="left" >
                            <h2 class="product-title">RX100 VI — broad zoom range and super-fast AF</h2>
                            <p class="product-description">An F1.8 135-mm prime with superb resolution, bokeh and AF,
                                XA and Super ED elements deliver high resolution even at F1.8,
                                Big, beautiful, natural bokeh,
                                Dual front and rear XD linear motors achieve fast, precise, quiet AF,
                                Nano AR Coating enhances flare resistance,
                                Durable, lightweight magnesium alloy,
                                Dust and moisture resistance maintains reliability in harsh environments</p>
                            

                            
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Banner;