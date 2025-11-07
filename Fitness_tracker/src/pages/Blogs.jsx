import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 16px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;

  iframe {
    border-radius: 12px;
    width: 100%;
    max-width: 300px;
    height: 530px;

    @media (max-width: 768px) {
      height: 400px;
    }
  }
`;

const FullVideo = styled.div`
  iframe {
    width: 100%;
    height: 315px;
    border-radius: 12px;
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  }
`;

const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <Title>FitnessTracker Blog</Title>

        <Section>
          <Subtitle>Why Fitness Is More Than Just a Goal</Subtitle>
          <Paragraph>
            At FitnessTracker, we believe fitness is a lifestyle—one that empowers your body and sharpens your mind. Whether you're training for strength, endurance, or mental clarity, staying active is the foundation of a fulfilling life.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle> YouTube Shorts: Quick Fitness Inspiration</Subtitle>
          <VideoGrid>
            <iframe src="https://www.youtube.com/embed/kqLPeaSQFgQ" title="Short 1" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/DQqhG9S6K7g" title="Short 2" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/1GmeGVdbuB0" title="Short 3" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/gmbP96p0GlA" title="Short 4" allowFullScreen></iframe>
          </VideoGrid>
        </Section>

        <Section>
          <Subtitle>Full-Length Tutorial: Total Body Workout</Subtitle>
          <FullVideo>
            <iframe
              src="https://www.youtube.com/embed/BHY0FxzoKZE"
              title="Total Body Workout"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </FullVideo>
        </Section>

        <Section>
          <Subtitle> Why Fitness Matters in the Military</Subtitle>
          <Paragraph>
            According to Cadet Gloria Reed’s article published by the U.S. Air University, physical fitness is essential for military readiness. It enhances not only physical strength but also mental resilience, teamwork, and mission performance.
          </Paragraph>
          <Paragraph>
            The Air Force emphasizes daily exercise to reduce obesity, improve productivity, and manage stress. As Lt. Col. Scott Anderson noted, “An increase in productivity, both mentally and physically,” is a direct result of regular workouts.
          </Paragraph>
          <Paragraph>
            Whether you're in the military or managing daily life, fitness builds discipline, camaraderie, and the ability to perform under pressure. That’s why FitnessTracker encourages consistent training—for every mission life throws your way.
          </Paragraph>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Blogs;