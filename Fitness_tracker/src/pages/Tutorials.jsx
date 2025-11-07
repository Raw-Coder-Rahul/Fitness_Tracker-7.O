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
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 16px;

  @media (max-width: 620px) {
    gap: 10px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding-left: 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 0px 16px;

  @media (max-width: 840px) {
    gap: 12px;
  }
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 100px;

  @media (max-width: 840px) {
    gap: 16px;
  }
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  gap: 12px;

  iframe {
    border-radius: 12px;
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
    width: 100%;
    height: 315px;

    @media (max-width: 840px) {
      height: 240px;
    }
  }
`;

const VideoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const VideoDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Tutorials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Video Tutorials</Title>
        <Section>
          <VideoGrid>
            <VideoCard>
              <iframe
                src="https://www.youtube.com/embed/cbKkB3POqaY?si=DHvyne-Gn4K0-LeE"
                title="Beginner Full Body Workout"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <VideoTitle>Beginner Full Body Workout</VideoTitle>
              <VideoDescription>
                A simple and effective full-body routine for beginners to build strength and stamina at home.
              </VideoDescription>
            </VideoCard>

            <VideoCard>
              <iframe
                src="https://www.youtube.com/embed/I9fsqKE5XHo?si=4UfRmXTtCbRRQ_3J"
                title="Stretching & Mobility Routine"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <VideoTitle>Stretching & Mobility Routine</VideoTitle>
              <VideoDescription>
                Improve flexibility and reduce soreness with this guided stretching and mobility session.
              </VideoDescription>
            </VideoCard>

            <VideoCard>
              <iframe
                src="https://www.youtube.com/embed/IrA9dvgRKR0?si=sBN3FzYi5WtfRfIR"
                title="Core Strength & Abs Routine"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <VideoTitle>Core Strength & Abs Routine</VideoTitle>
              <VideoDescription>
                Strengthen your core and sculpt your abs with this focused 15-minute routine.
              </VideoDescription>
            </VideoCard>

            <VideoCard>
              <iframe
                src="https://www.youtube.com/embed/jKVk9lK9kCk?si=NCGoGvv19F9NzKEd"
                title="Post-Workout Stretching Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <VideoTitle>Post-Workout Stretching Guide</VideoTitle>
              <VideoDescription>
                Cool down and recover faster with this guided post-workout stretching session.
              </VideoDescription>
            </VideoCard>

            <VideoCard>
              <iframe
                src="https://www.youtube.com/embed/YaXPRqUwItQ?si=-_AJIWG6K7yYiOGb"
                title="Home Workout for Fat Loss"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <VideoTitle>Home Workout for Fat Loss</VideoTitle>
              <VideoDescription>
                A high-intensity fat-burning workout you can do at home with no equipment.
              </VideoDescription>
            </VideoCard>
          </VideoGrid>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Tutorials;