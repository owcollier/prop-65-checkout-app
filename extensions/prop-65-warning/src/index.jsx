import React from 'react';
import {
  render,
  useShippingAddress,
  Banner,
  Text,
  Link
} from '@shopify/checkout-ui-extensions-react';

// render("Checkout::Dynamic::Render", () => <Prop65WarningDynamic />);
render("Checkout::Dynamic::Render", () => <Prop65WarningStatic />);

// Dynamic display of Prop 65 Warning
// Conditional, based on StandardAPI shippingAddress property via useShippingAddress react hook
// Shipping address updates on address 'change' vs every keystroke
// https://shopify.dev/docs/api/checkout-ui-extensions/unstable/apis/standardapi#properties-propertydetail-shippingaddress

function Prop65WarningDynamic() {
  const title = 'Proposition 65 Warning';
  const status = 'warning';

  const address = useShippingAddress();

  if (address.provinceCode === 'CA') {
    return (
      <Banner title={title} status={status}>
        <Text size="small">The baked goods you are purchasing can expose you to chemicals, including acrylamide and furfuryl alcohol, which are known to the State of California to cause cancer and birth defects or other reproductive harm. We do not add acrylamide or furfuryl alcohol to our products; rather, they are byproducts of the cooking process, for example when baked goods are baked. For more information, visit <Link to="www.P65Warnings.ca.gov/food.">www.P65Warnings.ca.gov/food.</Link></Text>
      </Banner>
    );
  }
}

// Static display of Prop 65 Warning
function Prop65WarningStatic() {
  const title = 'Proposition 65 Warning';
  const status = 'warning';

    return (
      <Banner title={title} status={status}>
        <Text size="small">The baked goods you are purchasing can expose you to chemicals, including acrylamide and furfuryl alcohol, which are known to the State of California to cause cancer and birth defects or other reproductive harm. We do not add acrylamide or furfuryl alcohol to our products; rather, they are byproducts of the cooking process, for example when baked goods are baked. For more information, visit <Link to="www.P65Warnings.ca.gov/food.">www.P65Warnings.ca.gov/food.</Link></Text>
      </Banner>
    );
}