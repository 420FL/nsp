import { useTranslation } from 'react-i18next'
import SectionTitle from '../atoms/SectionTitle.jsx'
import BlogCard from '../molecules/BlogCard.jsx'
import { blogPosts } from '../../data/blog.js'

export default function BlogSection() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="blog" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('blog.section_title')}
          subtitle={t('blog.section_subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              title={isEn ? post.titleEn : post.title}
              excerpt={isEn ? post.excerptEn : post.excerpt}
              date={isEn ? post.dateEn : post.date}
              category={post.category}
              categoryKey={post.categoryKey}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
