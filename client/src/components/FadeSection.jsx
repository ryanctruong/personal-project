import { motion } from 'framer-motion'

const FadeSection = ({ children, className = '', root = undefined }) => {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 24, filter: 'blur(2px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ amount: 0.55, once: false, root }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
            {children}
        </motion.section>
    )
}

export default FadeSection
