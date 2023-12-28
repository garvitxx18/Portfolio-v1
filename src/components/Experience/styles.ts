import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .experiences {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 2rem;
    padding-top: 1rem;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 1rem;
    overflow: hidden;

    .experience {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      padding: 2rem 1.8rem;
      background-color: #ffffff;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      &:hover {
        transform: translateY(-5px);
        background-color: #f8f8ff;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 1.8rem;
        .company-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          .company-name {
            margin-top: 2rem;
            margin-left: 1rem;
            color: #353843;
            font-weight: bold;
            margin-top: 1.8rem;
            color: #010101;
            margin-bottom: 2rem;
          }
        }
        .experience-links {
          display: flex;
          align-items: center;
          gap: 1rem;

          h5 {
            color: #708090;
          }
        }
        a > img {
          width: 5rem;
        }
      }

      .company-data {
        list-style-type: circle;
        color: #000000;
        li {
          margin: 1rem 0;
        }
      }
      .company-role {
        font-family: "Gruppo", sans-serif;
        font-weight: bold;
        margin-top: 1.8rem;
        color: #191970;
        margin-bottom: 2rem;
      }

      p {
        color: #00008b;
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a {
          color: #00008b;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: 1.8rem;
        .tech-list {
          color: #1f1f1f;
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 1150px) {
    .experiences {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media (max-width: 960px) {
    .experiences {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .experiences {
      grid-template-columns: 1fr;
    }
  }
`;
