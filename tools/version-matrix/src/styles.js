import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`;

export const Card = styled.div`
    padding: 10px;
    margin: 2px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    box-sizing: border-box;
    width: 340px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
        transform: translate3d(0px, -1px, 0px);
    }
`;

export const CardHeader = styled.h2`
    text-align: center;
    margin: 0 0 10px;
`;

export const CardPair = styled.div`
    margin: 0 0 0.5rem;
    display: flex;
    justify-content: space-between;
`;

export const CardKey = styled.span`
    font-weight: bolder;
    margin-right: 5px;
`;

export const CardBadge = styled.div`
    background: #1165f1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.smaller ? "1.1rem" : "1.5rem"};
    color: #fff;
    padding: 5px;
    border-radius: 5px;
`;

export const CardSubtext = styled.div`
    font-size: 0.9rem;
    text-align: center;
`;

export const Divider = styled(CardSubtext)`
    margin: 12px 0 12px;
`;

export const ServicePair = styled(CardPair)`
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
`;