import {
  BannerSectionContainer,
  Banner,
  BannerImage,
} from './BannerSection.styles';

const BannerSection = () => {
  return (
    <BannerSectionContainer maxWidth={false}>
      <Banner>
        <BannerImage image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiTx5a4TILYVCgGLu9hYZXQhZf6SqMJRZtjGXsadwCQDEf25Y2SK_9j5OqdwrqIHuTLxYW1upbcnxuUjfPUrJzIr7ra1hIOrqsncMQUvWy_knBXtOjhx2z2RvOJUaXfrGSznUgFueS3Vg7A0D5Ksq_EfH8eS1AomrGf_5eeGXLyr5jpLSNgnd_Xuz4yowh/s2400/PT%20Kalbe%20Farma%20Tbk.png" />
      </Banner>
      <Banner>
        <BannerImage image="https://assets.klikindomaret.com///products/promopage/Kalbe%20Nutritionals%20Official%20Store%20Klik%20Indomaret_big%20banner.jpg" />
      </Banner>
    </BannerSectionContainer>
  );
};

export default BannerSection;
