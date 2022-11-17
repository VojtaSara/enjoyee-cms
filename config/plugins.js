module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AKIA5SWMQNJYBIVO5AWI'),
          secretAccessKey: env('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'),
          region: env('eu-central-1'),
          params: {
              Bucket: env('enjoye-strapi-images'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });