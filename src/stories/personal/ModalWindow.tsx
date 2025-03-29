import React from 'react';
import s from './modalwindow.module.sass';
// import PropTypes from "prop-types";

interface ModalWindowProps {
    /**
     * Is modal window visible?
     */
    visible?: boolean;
    /**
     * Includes modal window any another react components?
     */
    children?: React.ReactNode;
    /**
     * Close button click handler
     */
    onClose?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export function ModalWindow(props: ModalWindowProps) {
    const { visible = true, children, onClose } = props;

    if (!visible) {
        return null;
    }

    return (
        <div className={s.overlay}>
            <div className={s.container}>
                Some content
            </div>
            {children}
        </div>
    );
}

// Если не использовать typeScript (обязательность параметров указывается при объявлении в интерфейсе
// как visible?: boolean), то можно объявить эту проверку без него блоком ниже и обязательность флагом .isRequired

// ModalWindow.propTypes = {
//     visible: PropTypes.bool,
//     children: PropTypes.node,
//     onClose: PropTypes.func.isRequired,
// };
