import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, image, article }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`
    }

    return (
        <Helmet
            title={seo.title}
            titleTemplate={titleTemplate}
            htmlAttributes={{ lang: 'pt-br' }}
        >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta charset="UTF-8" />
            <meta name="robots" content="index, follow" />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {(article ? true : null) && (
                <meta property="og:type" content="article" />
            )}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

            <meta
                name="keywords"
                content="portfolio, machine learning, desenvolvimento de aplicativo, desenvolvimento mobile, web design, desenvolvimento iphone, desenvolvimento android, desenvolvimento de site, tecnologia."
            />

            {seo.image && <meta name="twitter:image" content={seo.image} />}

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </Helmet>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: siteUrl
                defaultImage: image
                twitterUsername
            }
        }
    }
`
