import styled from "styled-components";

function Card() {
    const GridContainer = styled.div`
        width: 90vw;
        text-align: center;
        background-color: #7722CC;
        margin: auto;
    `;

    const VoteButton = styled.button`
        height: 500px;
        width: 500px;
        border-radius: 10px;
        font-size: 15pt;
    `;

    const id = "test";

    return(
        <GridContainer>
            <div className="card">
                <VoteButton className="card-button">test</VoteButton>
            </div>
        </GridContainer>
    )
}

export default Card;