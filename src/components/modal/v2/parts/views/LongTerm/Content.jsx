/** @jsx h */
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { useXProps, useServerData } from '../../../lib';
import Calculator from '../../Calculator';
import Icon from '../../Icon';
import ProductListLink from '../../ProductListLink';
import Instructions from '../../Instructions';
import Button from '../../Button';

export const LongTerm = ({
    calculator,
    disclaimer,
    instructions,
    disclosure,
    linkToProductList,
    buttonText,
    cta,
    contentBodyRef
}) => {
    const [expandedState, setExpandedState] = useState(false);
    const { onClose } = useXProps();

    /**
     * The presence of "cta" in the content means the channel is checkout and the checkout-specific
     * partial content has been added. Because we do not want to show the link to the product list modal if we are in checkout,
     * we make sure "cta" is not in the content. If "cta" is not undefined, return the Checkout-specific cta button.
     * Otherwise, render the Product List link.
     */
    const renderCheckoutCtaButton = () => {
        if (typeof cta !== 'undefined') {
            return (
                <Fragment>
                    <div className="button__container">
                        <Button onClick={() => onClose({ linkName: 'Pay Monthly Continue' })} className="cta">
                            {cta.buttonText}
                        </Button>
                    </div>
                </Fragment>
            );
        }
        if (useServerData()?.views?.length > 1 && typeof cta === 'undefined') {
            return <ProductListLink>{linkToProductList}</ProductListLink>;
        }
        return <Fragment />;
    };

    return (
        <Fragment>
            <div className="content__container">
                <main className="main">
                    <div className="content__body" ref={contentBodyRef}>
                        <div className="content__row dynamic">
                            <div className="content__col">
                                <Calculator
                                    setExpandedState={setExpandedState}
                                    calculator={calculator}
                                    disclaimer={disclaimer}
                                    buttonText={buttonText}
                                />
                            </div>
                            <div className={`content__col ${expandedState ? '' : 'collapsed'}`}>
                                <div className="branded-image">
                                    {/* TODO: update from temp desktop image */}
                                    <Icon name="pay-monthly-temp-image" />
                                </div>
                            </div>
                        </div>
                        <Instructions instructions={instructions} expandedState={expandedState} />
                        <div className={`content__row disclosure ${expandedState ? '' : 'collapsed'}`}>
                            {disclosure}
                        </div>
                        {renderCheckoutCtaButton()}
                    </div>
                </main>
            </div>
        </Fragment>
    );
};