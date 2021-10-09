require "test_helper"

class VocabularyWordsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @vocabulary_word = vocabulary_words(:one)
  end

  test "should get index" do
    get vocabulary_words_url, as: :json
    assert_response :success
  end

  test "should create vocabulary_word" do
    assert_difference('VocabularyWord.count') do
      post vocabulary_words_url, params: { vocabulary_word: { example: @vocabulary_word.example, pronounce: @vocabulary_word.pronounce, translate: @vocabulary_word.translate, user_id: @vocabulary_word.user_id, word: @vocabulary_word.word } }, as: :json
    end

    assert_response 201
  end

  test "should show vocabulary_word" do
    get vocabulary_word_url(@vocabulary_word), as: :json
    assert_response :success
  end

  test "should update vocabulary_word" do
    patch vocabulary_word_url(@vocabulary_word), params: { vocabulary_word: { example: @vocabulary_word.example, pronounce: @vocabulary_word.pronounce, translate: @vocabulary_word.translate, user_id: @vocabulary_word.user_id, word: @vocabulary_word.word } }, as: :json
    assert_response 200
  end

  test "should destroy vocabulary_word" do
    assert_difference('VocabularyWord.count', -1) do
      delete vocabulary_word_url(@vocabulary_word), as: :json
    end

    assert_response 204
  end
end
