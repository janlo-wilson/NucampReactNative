import React, {Component } from 'react';
import {  ScrollView } from 'react-native';
import { PricingCard } from 'react-native-elements';

class Pricing extends Component {

    render() {
        return (
            <ScrollView>
                <PricingCard
                color="#cd7f32"
                title="Bronze Package"
                titleStyle="bold"
                price="$25"
                info={['Manicure', 'Hand Massage', 'Glass Champagne']}
                button={{ title: 'BOOK NOW!', titleStyle: {
                    fontSize: 20
                }}}
                />
                <PricingCard
                color="#C0C0C0"
                title="Silver Package"
                titleStyle="bold"
                price="$50"
                info={['Manicure', 'Hand Massage', 'Pedicure', 'Glass Champagne']}
                button={{ title: 'BOOK NOW!', titleStyle: {
                    fontSize: 20
                 }}}
                />
                <PricingCard
                color="#d4af37"
                title="Gold Package"
                titleStyle="bold"
                price="$100"
                info={['Manicure', 'Hand Massage', 'Pedicure', 'Foot Massage', 'Unlimited Refill Champagne']}
                button={{ title: 'BOOK NOW!', titleStyle: {
                    fontSize: 20 
                }}}
                />
            </ScrollView>
        )
    }
} 

export default Pricing;