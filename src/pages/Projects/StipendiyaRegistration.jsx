import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { User, Upload, FileText, CheckCircle, AlertCircle, Loader } from "lucide-react";
import PropTypes from "prop-types";

const UserInfoCard = ({ label, value }) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 transition-colors duration-200">
    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</div>
    <div className="text-lg font-medium text-gray-900 dark:text-white">{value || "—"}</div>
  </div>
);

UserInfoCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

const FileUploadField = ({ 
  label, 
  file, 
  onFileChange, 
  error, 
  index,
  t 
}) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onFileChange(index, selectedFile);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        {label}
      </label>
      
      <div className="relative">
        <input
          type="file"
          accept=".pdf,.jpeg,.jpg,.png,.doc,.docx,.zip,.rar"
          onChange={handleFileChange}
          className="hidden"
          id={`file-${index}`}
        />
        <label
          htmlFor={`file-${index}`}
          className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
            error 
              ? 'border-red-300 bg-red-50 hover:bg-red-100 dark:border-red-600 dark:bg-red-900/20' 
              : file
              ? 'border-green-300 bg-green-50 hover:bg-green-100 dark:border-green-600 dark:bg-green-900/20'
              : 'border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700/50 dark:hover:bg-gray-700'
          }`}
        >
          <div className="text-center">
            {file ? (
              <>
                <CheckCircle className="mx-auto h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  {t('stipendiyaRegistration.form.fileSelected')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
                </p>
              </>
            ) : (
              <>
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('stipendiyaRegistration.form.selectFile')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  PDF, JPEG, PNG, DOC, ZIP, RAR (max 10MB)
                </p>
              </>
            )}
          </div>
        </label>
      </div>
      
      {error && (
        <div className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

FileUploadField.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.object,
  onFileChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  index: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};

export default function StipendiyaRegistration() {
  const { t } = useTranslation("global");
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState(null);
  const [universityInfo, setUniversityInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  // Files state - array of 7 files
  const [files, setFiles] = useState(Array(7).fill(null));
  const [fileErrors, setFileErrors] = useState(Array(7).fill(null));

  const documents = t('stipendiyaRegistration.uploadDocuments.documents', { returnObjects: true });
  const safeDocuments = Array.isArray(documents) ? documents : [];

  // Validate file
  const validateFile = (file) => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg', 
      'image/png',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/zip',
      'application/x-rar-compressed',
      'application/vnd.rar'
    ];

    if (file.size > maxSize) {
      return t('stipendiyaRegistration.validation.maxSize');
    }

    if (!allowedTypes.includes(file.type) && !file.name.toLowerCase().match(/\.(pdf|jpeg|jpg|png|doc|docx|zip|rar)$/)) {
      return t('stipendiyaRegistration.validation.invalidFormat');
    }

    return null;
  };

  // Handle file change
  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    const newErrors = [...fileErrors];

    if (file) {
      const error = validateFile(file);
      newFiles[index] = file;
      newErrors[index] = error;
    } else {
      newFiles[index] = null;
      newErrors[index] = null;
    }

    setFiles(newFiles);
    setFileErrors(newErrors);
  };

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      const code = searchParams.get('code');
      
      if (!code) {
        setError('Код авторизации не найден');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://www.it-istedod.uz/api/v1/one-id/user-info?code=${code}`);
        const data = await response.json();
        
        if (response.ok) {
          // Новая структура ответа содержит userInfo и universityInfo
          setUserInfo(data.userInfo || data);
          
          // Проверяем наличие и валидность universityInfo
          if (data.universityInfo) {
            setUniversityInfo(data.universityInfo);
          } else {
            setUniversityInfo(null);
          }
        } else {
          setError('Ошибка при получении данных пользователя');
        }
      } catch (err) {
        setError('Ошибка сети при получении данных пользователя');
        console.error('Error fetching user info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [searchParams]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that all files are uploaded and valid
    const hasErrors = fileErrors.some(error => error !== null);
    const allFilesUploaded = files.every(file => file !== null);
    
    if (hasErrors) {
      return;
    }
    
    if (!allFilesUploaded) {
      alert(t('stipendiyaRegistration.validation.required'));
      return;
    }

    setSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Add user info and university info
      if (userInfo) {
        formData.append('user_info', JSON.stringify(userInfo));
      }
      if (universityInfo && universityInfo.success && universityInfo.data) {
        formData.append('university_info', JSON.stringify(universityInfo));
      }
      
      // Add files
      files.forEach((file, index) => {
        if (file) {
          formData.append(`document_${index + 1}`, file);
        }
      });

      const response = await fetch('https://www.it-istedod.uz/api/v1/one-id/user-info', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setFiles(Array(7).fill(null));
        setFileErrors(Array(7).fill(null));
      } else {
        throw new Error('Ошибка при отправке заявления');
      }
    } catch (err) {
      setError(t('stipendiyaRegistration.form.error'));
      console.error('Error submitting application:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600 dark:text-gray-400">{t('stipendiyaRegistration.form.loading')}</p>
        </div>
      </div>
    );
  }

  if (error && !userInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200 mt-[100px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('stipendiyaRegistration.title')}
          </h1>
        </div>

        {success && (
          <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
              <p className="text-green-600 dark:text-green-400 font-medium">
                {t('stipendiyaRegistration.form.success')}
              </p>
            </div>
          </div>
        )}

        {/* User Information Section */}
        {userInfo && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-200">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('stipendiyaRegistration.userInfo.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UserInfoCard 
                label={t('stipendiyaRegistration.userInfo.fullName')} 
                value={userInfo.full_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.userInfo.birthDate')} 
                value={userInfo.birth_date} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.userInfo.passportNo')} 
                value={userInfo.pport_no} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.userInfo.pin')} 
                value={userInfo.pin} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.userInfo.userId')} 
                value={userInfo.user_id} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.userInfo.address')} 
                value={userInfo.per_adr} 
              />
            </div>
          </div>
        )}

        {/* University Information Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-200">
          <div className="flex items-center mb-6">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('stipendiyaRegistration.universityInfo.title')}
            </h2>
          </div>
          
          {universityInfo && universityInfo.success && universityInfo.data ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.universityName')} 
                value={universityInfo.data.university_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.facultyName')} 
                value={universityInfo.data.faculty_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.specialityName')} 
                value={universityInfo.data.speciality_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.course')} 
                value={universityInfo.data.course} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.groupName')} 
                value={universityInfo.data.group_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.educationForm')} 
                value={universityInfo.data.education_form_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.educationType')} 
                value={universityInfo.data.education_type_name} 
              />
              <UserInfoCard 
                label={t('stipendiyaRegistration.universityInfo.paymentType')} 
                value={universityInfo.data.payment_type_name} 
              />
            </div>
          ) : (
            <div className="text-center py-8">
              {!universityInfo ? (
                <div className="text-gray-500 dark:text-gray-400">
                  <Loader className="w-6 h-6 animate-spin mx-auto mb-2" />
                  <p>{t('stipendiyaRegistration.universityInfo.loading')}</p>
                </div>
              ) : (
                <div className="text-amber-600 dark:text-amber-400">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium mb-1">{t('stipendiyaRegistration.universityInfo.notFound')}</p>
                  <p className="text-sm">{t('stipendiyaRegistration.universityInfo.notFoundDescription')}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Warning if university info is not available */}
        {(!universityInfo || !universityInfo.success || !universityInfo.data) && userInfo && (
          <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-yellow-800 dark:text-yellow-200 font-medium mb-1">
                  {t('stipendiyaRegistration.warning.title')}
                </p>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  {t('stipendiyaRegistration.warning.description')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Document Upload Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('stipendiyaRegistration.uploadDocuments.title')}
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('stipendiyaRegistration.uploadDocuments.description')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {safeDocuments.map((document, index) => (
              <FileUploadField
                key={index}
                label={`${index + 1}. ${document}`}
                file={files[index]}
                onFileChange={handleFileChange}
                error={fileErrors[index]}
                index={index}
                t={t}
              />
            ))}

            <div className="pt-6">
              <button
                type="submit"
                disabled={submitting || !userInfo || files.some(file => file === null) || fileErrors.some(error => error !== null)}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {submitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin mr-2" />
                    {t('stipendiyaRegistration.form.loading')}
                  </>
                ) : (
                  t('stipendiyaRegistration.form.submit')
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 